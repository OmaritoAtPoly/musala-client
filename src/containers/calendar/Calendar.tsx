import moment, { Moment } from 'moment';
import React, { useState, useCallback } from 'react';
import CalendarView from '../../component/calendar/Calendar';
import { getBlockedDateRange } from '../../utils/calendar';
import { DATE_FORMAT } from '../../utils/constants';
import { Range } from './utils/types';

export type BlockedDay = {
    checkin: string;
    checkout: string
    byBooking?: boolean | undefined | null;
}

interface Props {
    blockedDayList: BlockedDay[]
    onChangeRange: (range: Range) => void;
}

export const Calendar = ({ blockedDayList, onChangeRange }: Props) => {
    const [currentMonth, setCurrentMonth] = useState(moment(new Date(), DATE_FORMAT));
    const [range, setRange] = useState<Range>()

    const checkRange = (date: Moment) => {
        checkRangeInEditableMode(date)
    }

    const isSelectedCheckInValid = useCallback((date: Moment) =>
        (blockedDayList.some((blockDateRange) => (date.isSameOrAfter(blockDateRange.checkin) && date.isBefore(blockDateRange.checkout) && blockDateRange.byBooking))) ? false : true, [blockedDayList])

    const isSelectedRangeValid = (checkIn: Moment, checkOut: Moment, blockedDays: BlockedDay[]) => {
        if (checkIn.isBefore(checkOut)) {
            if (blockedDays.some((blockedDay) => (moment(blockedDay.checkin, DATE_FORMAT).isBetween(checkIn, checkOut) && blockedDay.byBooking))) return false
            return true;
        } return false;
    }


    const checkRangeInEditableMode = (date: Moment) => {
        if (!range && isSelectedCheckInValid(date)) {
            setRange({ checkin: date, checkout: undefined })
            onChangeRange({ checkin: date, checkout: undefined })
        } else if (range && range.checkout === undefined && isSelectedRangeValid(range.checkin!, date, blockedDayList)) {
            const orderedRange = checkRangeOrder(date, range.checkin!)
            setRange(orderedRange)
            onChangeRange(orderedRange)
        } else if (isSelectedCheckInValid(date)) {
            setRange({ checkin: date, checkout: undefined })
            onChangeRange({ checkin: date, checkout: undefined })
        }
    }

    const handleOnClickedDay = (date: Moment) => {
        checkRange(date)
    }
    return <CalendarView currentMonth={currentMonth} blockedDayList={blockedDayList} range={range} setCurrentMonth={setCurrentMonth} handleOnClickedDay={handleOnClickedDay} />
}

const checkRangeOrder = (date: Moment, checkIn: Moment): Range => {
    if (date.isBefore(checkIn)) {
        return { checkin: date, checkout: checkIn }
    } else return { checkin: checkIn, checkout: date }
}

const isSelectedCheckInValid = (date: Moment, blockedDays: BlockedDay[]) =>
    (blockedDays.some((range) => (date.isSameOrAfter(range.checkin) && date.isBefore(range.checkout) && range.byBooking))) ? false : true


const isSelectedRangeValid = (checkIn: Moment, checkOut: Moment, blockedDays: BlockedDay[]) => {
    if (checkIn.isBefore(checkOut)) {
        if (blockedDays.some((blockedDay) => (moment(blockedDay.checkin, DATE_FORMAT).isBetween(checkIn, checkOut) && blockedDay.byBooking))) return false
        return true;
    } return false;
}





