import { Dialog, DialogContent, DialogTitle, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { BlockedDay } from '../../../containers/calendar/Calendar';
import customTheme from '../../../theme';
import { Range } from '../utils';
import Form from './BookingForm';

interface Props {
	visible: boolean;
	onClose: () => void;
	onRangeChanged: (range: Range) => void;
	handleValidRangeAlert: () => void;
	onSubmit: (pax: number) => void;
	price: number;
	ranking: number;
	adTitle: string;
	blockedDays: BlockedDay[];
	range: Range | undefined;
	validRange: boolean;
}

export const BookingDialog = ({ visible, price, ranking, adTitle, onRangeChanged, handleValidRangeAlert, validRange, onSubmit, blockedDays, range, onClose }: Props) => {
	const classes = useStyles();
	return (
		<Dialog fullScreen open={visible} onClose={onClose}>
			<DialogTitle id="book-title" className={classes.title}>
				<IconButton className={classes.closeButton} aria-label="close" onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<Form
					price={price}
					adRanking={ranking}
					adTitle={adTitle}
					blockedDays={blockedDays}
					range={range}
					onChangeRange={onRangeChanged}
					onSubmit={onSubmit}
					handleValidRangeAlert={handleValidRangeAlert}
					validRange={validRange}
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