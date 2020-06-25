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
        (blockedDayList.some((blockDateRange) => (isStrictBetween(date, moment(blockDateRange.checkin, DATE_FORMAT), moment(blockDateRange.checkout, DATE_FORMAT)) && blockDateRange.byBooking))) ? false : true, [blockedDayList])

    const isSelectedRangeValid = useCallback((checkIn: Moment, checkOut: Moment) => {
        if (checkIn.isBefore(checkOut)) {
            return (blockedDayList.some((blockedDay) => (isStrictBetween(moment(blockedDay.checkin, DATE_FORMAT), checkIn, checkOut) && blockedDay.byBooking))) ? false : true
            // if (blockedDayList.some((blockedDay) => (moment(blockedDay.checkin, DATE_FORMAT).isBetween(checkIn, checkOut) && blockedDay.byBooking))) return false
            // return true;
        } return false;
    }, [blockedDayList])



    const checkRangeInEditableMode = (date: Moment) => {
        if (!range && isSelectedCheckInValid(date)) {
            setRange({ checkin: date, checkout: undefined })
            onChangeRange({ checkin: date, checkout: undefined })
        } else if (range && range.checkout === undefined && isSelectedRangeValid(range.checkin!, date)) {
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

const isStrictBetween = (currentDate: Moment, checkIn: Moment, checkout: Moment) => {
    return (currentDate.isSameOrAfter(checkIn) && currentDate.isSameOrBefore(checkout)) ? true : false
}

const isSelectedCheckInValid = (date: Moment, blockedDays: BlockedDay[]) => {
    for (let i = 0; i < blockedDays.length; i++) {
        const range = getBlockedDateRange(blockedDays[i])
        if (date.isSameOrAfter(range.checkin) && date.isSameOrBefore(range.checkout) && blockedDays[i].byBooking) {
            return false;
        }
    } return true;
}

const isSelectedRangeValid = (checkIn: Moment, checkOut: Moment, blockedDays: BlockedDay[]) => {
    if (checkIn.isBefore(checkOut)) {
        for (let i = 0; i < blockedDays.length; i++) {
            const range = getBlockedDateRange(blockedDays[i])
            if (range.checkin!.isBetween(checkIn, checkOut) && blockedDays[i].byBooking) return false;
        } return true;
    } return false;
}




