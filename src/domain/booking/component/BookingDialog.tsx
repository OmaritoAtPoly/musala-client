import { Dialog, DialogContent, DialogTitle, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { BookingForm } from './BookingForm'
import customTheme from '../../../theme';
import { Range } from '../utils';

interface Props {
	visible: boolean;
	onClose: () => void;
	onRangeChanged: (range: Range) => void;
	price: number;
	ranking: number;
	adTitle: string;
	bookedDays: Range[];
	range: Range | undefined;
}

export const BookingDialog = ({ visible, price, ranking, adTitle, onRangeChanged, bookedDays, range, onClose }: Props) => {
	const classes = useStyles();
	return (
		<Dialog fullScreen open={visible} onClose={onClose}>
			<DialogTitle id="book-title" className={classes.title}>
				<IconButton className={classes.closeButton} aria-label="close" onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<BookingForm
					price={price}
					adRanking={ranking}
					adTitle={adTitle}
					bookedDays={bookedDays}
					range={range}
					onChangeRange={onRangeChanged}
				/>
			</DialogContent>
		</Dialog>
	)
}

const useStyles = makeStyles({
	title: {
		textAlign: 'center',
	},
	closeButton: {
		position: 'absolute',
		right: customTheme.spacing.margin.small,
		top: customTheme.spacing.margin.small,
		color: customTheme.color.foreground,
	},
});