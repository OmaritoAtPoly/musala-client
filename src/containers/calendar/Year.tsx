import moment, { Moment } from 'moment';
import React, { useMemo } from 'react';
import { DayModel, DAY_STATE, Range } from './utils/types';

interface Props {
    currentMonth: Moment;
    bookedDays: Range[];
    range: Range | undefined;
    onDayClick: (date: Moment) => void;
    setCurrentMonth: (month: Moment) => void;
}

export const Year = ({ currentMonth, setCurrentMonth, range, bookedDays, onDayClick }: Props) => {
    const dayListFirstMonth = useMemo(() => createDays(currentMonth, range, bookedDays), [currentMonth, range, bookedDays]);
    const dayListSecondMonth = useMemo(() => createDays(currentMonth.clone().add(1, 'M'), range, bookedDays), [currentMonth, range, bookedDays]);

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

const createDays = (month: Moment, range: Range | undefined, bookedDays: Range[]): DayModel[] => {
    const startOfMonth = month.clone().startOf('month').startOf('week');
    const endOfMonth = month.clone().endOf('month').endOf('week');
    return generateDayList(startOfMonth, endOfMonth, month, range, bookedDays)
};

const generateDayList = (firstDay: Moment, endOfMonth: Moment, currentMonth: Moment, range: Range | undefined, bookedDays: Range[]): DayModel[] => {
    let days: DayModel[] = [];
    const currentDate = moment()
    while (firstDay < endOfMonth) {
        days.push({ dateOfDay: firstDay.clone(), currentMonth: currentMonth.clone(), state: getDayState(firstDay, currentDate, range, bookedDays) });
        firstDay.add(24, 'hours');
    }
    return days
}

const getDayState = (day: Moment, currentDate: Moment, range: Range | undefined, bookedDays: Range[]) => {
    if (day.isBefore(currentDate)) {
        return DAY_STATE.BEFORE_CURRENT;
    } else if (range && day.isSame(range.checkIn) && range.checkOut === undefined) {
        return DAY_STATE.SINGLE_SELECTED;
    } else if (range && day.isSame(range.checkIn) && range.checkOut !== undefined) {
        return DAY_STATE.FIRST_RANGE_SELECTED;
    } else if (range && day.isBetween(range.checkIn, range.checkOut)) {
        return DAY_STATE.MIDDLE_RANGE_SELECTED;
    } else if (range && day.isSame(range.checkOut)) {
        return DAY_STATE.LAST_RANGE_SELECTED;
    }
    for (let i = 0; i < bookedDays.length; i++) {
        if (day.isSame(bookedDays[i].checkIn) || day.isBetween(bookedDays[i].checkIn, bookedDays[i].checkOut)) {
            return DAY_STATE.BOOKED_DAY
        }
    }
    return DAY_STATE.EMPTY
}