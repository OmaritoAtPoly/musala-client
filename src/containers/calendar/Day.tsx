import { Moment } from 'moment';
import React from 'react';
import { DayModel, DAY_STATE } from './utils/types';
import { theme } from '../../theme';
import DayView from '../../component/calendar/Day';
import { FakeDay } from '../../component/calendar/FakeDay';

interface Props {
    day: DayModel;
    onDayClick: (date: Moment) => void;
}

export const Day = ({ day, onDayClick }: Props) => {
    return (!day.dateOfDay.isSame(day.currentMonth, 'M')) ? <FakeDay /> : <DayView day={day} onDayClick={onDayClick} style={getDayStyle(day)} />
}

const getDayStyle = (day: DayModel) => {
    if (day.state === DAY_STATE.BOOKED_DAY) {
        return {
            textDecoration: 'line-through',
            color: theme.palette.text.primary
        }
    } else if (day.state === DAY_STATE.SINGLE_SELECTED) {
        return {
            color: 'white',
            borderRadius: '100%',
            backgroundColor: 'green',

        }
    } else if (day.state === DAY_STATE.FIRST_RANGE_SELECTED) {
        return {
            backgroundColor: 'green',
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            color: 'white'
        }
    } else if (day.state === DAY_STATE.MIDDLE_RANGE_SELECTED) {
        return {
            backgroundColor: 'green',
            color: 'white'
        }
    } else if (day.state === DAY_STATE.LAST_RANGE_SELECTED) {
        return {
            backgroundColor: 'green',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
            color: theme.palette.background
        }
    } else if (day.state === DAY_STATE.EMPTY) {
        return {
            borderRadius: '0.3rem',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background,
        }
    } else if (day.state === DAY_STATE.BEFORE_CURRENT) {
        return {
            textDecoration: 'line-through',
            color: theme.palette.text.secondary
        }
    }
};






