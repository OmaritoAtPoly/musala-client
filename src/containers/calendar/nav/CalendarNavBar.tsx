import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { LeftArrowNav } from './LeftArrowNav';
import { RightArrowNav } from './RightArrowNav';
import { Theme } from '@material-ui/core';

interface Props {
	nextMonth: () => void;
	previousMonth: () => void;
}

export const CalendarNavBar = ({ previousMonth, nextMonth }: Props) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<LeftArrowNav previousMonth={previousMonth} />
			<RightArrowNav nextMonth={nextMonth} />
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: '2px',
		paddingBottom: '2px',
		width: '100%',
	}
}
));