import { Moment } from 'moment';
import React from 'react';
import { DayModel, DAY_STATE } from './utils/types';
import customTheme, { theme } from '../../theme';
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
            backgroundColor: customTheme.color.grayLight1,
            cursor: 'default',
            color: customTheme.color.primary,
        }
    } else if (day.state === DAY_STATE.SINGLE_SELECTED) {
        return {
            color: customTheme.color.white,
            borderRadius: customTheme.dimension.width.w100,
            backgroundColor: customTheme.color.primaryAccent,
            fontWeight: customTheme.dimension.font.bold
        }
    } else if (day.state === DAY_STATE.FIRST_RANGE_SELECTED) {
        return {
            backgroundColor: customTheme.color.primaryAccent,
            borderTopLeftRadius: customTheme.dimension.width.w50,
            borderBottomLeftRadius: customTheme.dimension.width.w50,
            fontWeight: customTheme.dimension.font.bold,
            color: customTheme.color.white
        }
    } else if (day.state === DAY_STATE.MIDDLE_RANGE_SELECTED) {
        return {
            backgroundColor: customTheme.color.primaryAccent,
            color: customTheme.color.white,
            fontWeight: customTheme.dimension.font.bold
        }
    } else if (day.state === DAY_STATE.LAST_RANGE_SELECTED) {
        return {
            backgroundColor: customTheme.color.primaryAccent,
            color: customTheme.color.white,
            borderTopRightRadius: customTheme.dimension.width.w50,
            borderBottomRightRadius: customTheme.dimension.width.w50,
            fontWeight: customTheme.dimension.font.bold
        }
    } else if (day.state === DAY_STATE.EMPTY) {
        return {
            borderRadius: customTheme.dimension.radius.small,
            color: theme.palette.text.primary,
            backgroundColor: customTheme.color.white
        }
    } else if (day.state === DAY_STATE.BEFORE_CURRENT) {
        return {
            textDecoration: 'line-through',
            backgroundColor: customTheme.color.grayLight1,
            cursor: 'default',
            color: theme.palette.text.secondary
        }
    } else return {}
};