import moment, { Moment } from 'moment';
import React, { useMemo } from 'react';
import { DayModel, DAY_STATE, Range } from './utils/types';
import YearView from '../../component/calendar/Year';
import { DATE_FORMAT } from '../../utils/constants';
import { BlockedDay } from './Calendar';

interface Props {
    currentMonth: Moment;
    blockedDayList: BlockedDay[]
    range: Range | undefined;
    onDayClick: (date: Moment) => void;
    setCurrentMonth: (month: Moment) => void;
}

export const Year = ({ currentMonth, setCurrentMonth, range, blockedDayList, onDayClick }: Props) => {
    const dayListFirstMonth = useMemo(() => createDays(currentMonth, range, blockedDayList), [currentMonth, range, blockedDayList]);
    const dayListSecondMonth = useMemo(() => createDays(currentMonth.clone().add(1, 'M'), range, blockedDayList), [currentMonth, range, blockedDayList]);

    const nextMonth = () => {
        const thisMoment = currentMonth.clone();
        setCurrentMonth(thisMoment.add(1, 'month'));
    };

    const previousMonth = () => {
        const thisMoment = currentMonth.clone();
        setCurrentMonth(thisMoment.subtract(1, 'month'));
    };
    return <YearView
        currentMonth={currentMonth}
        firstMonthDayList={dayListFirstMonth}
        secondMonthDayList={dayListSecondMonth}
        onDayClick={onDayClick}
        nextMonth={nextMonth}
        previousMonth={previousMonth}
    />
}

const createDays = (month: Moment, range: Range | undefined, blockedDayList: BlockedDay[]): DayModel[] => {
    const startOfMonth = month.clone().startOf('month').startOf('week');
    const endOfMonth = month.clone().endOf('month').endOf('week');
    return generateDayList(startOfMonth, endOfMonth, month, range, blockedDayList)
};

const generateDayList = (firstDay: Moment, endOfMonth: Moment, currentMonth: Moment, range: Range | undefined, blockedDayList: BlockedDay[]): DayModel[] => {
    let days: DayModel[] = [];
    const currentDate = moment()
    while (firstDay < endOfMonth) {
        days.push({ dateOfDay: firstDay.clone(), currentMonth: currentMonth.clone(), state: getDayState(firstDay, currentDate, range, blockedDayList) });
        firstDay.add(24, 'hours');
    }
    return days
}

const getDayState = (day: Moment, currentDate: Moment, range: Range | undefined, blockedDayList: BlockedDay[]) => {
    if (day.isBefore(currentDate)) {
        return DAY_STATE.BEFORE_CURRENT;
    } else if (range && day.isSame(range.checkin) && range.checkout === undefined) {
        return DAY_STATE.SINGLE_SELECTED;
    } else if (range && day.isSame(range.checkin) && range.checkout !== undefined) {
        return DAY_STATE.FIRST_RANGE_SELECTED;
    } else if (range && day.isBetween(range.checkin, range.checkout)) {
        return DAY_STATE.MIDDLE_RANGE_SELECTED;
    } else if (range && day.isSame(range.checkout)) {
        return DAY_STATE.LAST_RANGE_SELECTED;
    }
    return resolveByDefaultState(day, blockedDayList)
}

const resolveByDefaultState = (day: Moment, blockedDayList: BlockedDay[]) => {
    for (let i = 0; i < blockedDayList.length; i++) {
        const range: Range = getRange(blockedDayList[i])
        if (blockedDayList[i].byBooking) {
            if (isFirstInBookingRange(day, range)) {
                return DAY_STATE.FIRST_IN_BOOKING_RANGE
            } else if (isMiddleInBookingRange(day, range)) {
                return DAY_STATE.MIDDLE_IN_BOOKING_RANGE
            } else if (isLastInBookingRange(day, range)) {
                return DAY_STATE.LAST_IN_BOOKING_RANGE
            }
        } else if (isBLocked(day, range)) {
            return DAY_STATE.BLOCKED_DAY
        }
    } return DAY_STATE.EMPTY
}

const getRange = (blockedDay: BlockedDay): Range => {
    return {
        checkin: moment(blockedDay.checkin, DATE_FORMAT),
        checkout: moment(blockedDay.checkout, DATE_FORMAT)
    }
}

const isFirstInBookingRange = (day: Moment, range: Range) => {
    return (day.isSame(range.checkin)) ? true : false
}

const isMiddleInBookingRange = (day: Moment, range: Range) => {
    return (day.isBetween(range.checkin, range.checkout)) ? true : false
}

const isLastInBookingRange = (day: Moment, range: Range) => {
    return (day.isSame(range.checkout)) ? true : false
}

const isBLocked = (day: Moment, range: Range) => {
    return (day.isSameOrAfter(range.checkin) && day.isSameOrBefore(range.checkout)) ? true : false
}











