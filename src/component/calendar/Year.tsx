import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/styles';
import { Moment } from 'moment';
import React from 'react';
import { DayModel } from '../../containers/calendar/utils/types';
import { Month } from '../../containers/calendar/Month';
import { CalendarNavBar } from '../../containers/calendar/nav/CalendarNavBar';

interface Props {
    firstMonthDayList: DayModel[];
    secondMonthDayList: DayModel[];
    currentMonth: Moment;
    nextMonth: () => void;
    previousMonth: () => void;
    onDayClick: (date: Moment) => void;
}

const Year = ({ previousMonth, nextMonth, onDayClick, currentMonth, ...props }: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <CalendarNavBar nextMonth={nextMonth} previousMonth={previousMonth} />
            <div className={classes.month}>
                <Month month={currentMonth} dayList={props.firstMonthDayList} onDayClick={onDayClick} />
                <Hidden only={['xs']} >
                    <Month month={currentMonth.clone().add(1, 'M')} dayList={props.secondMonthDayList} onDayClick={onDayClick} />
                </Hidden>
            </div>
        </div>
    )
}

export default Year;

const useStyles = makeStyles({
    container: {
        width: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    month: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
    }
});