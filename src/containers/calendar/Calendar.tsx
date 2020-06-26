import moment, { Moment } from 'moment';
import React, { useCallback, useState } from 'react';
import CalendarView from '../../component/calendar/Calendar';
import { BOOKING_MODE, DATE_FORMAT } from '../../utils/constants';
import { Range } from './utils/types';
import { getBlockedDateRange } from '../../utils/calendar';

export type BlockedDay = {
    checkin: string;
    checkout: string
    byBooking?: boolean | undefined | null;
}

interface Props {
    blockedDayList: BlockedDay[];
    mode: string;
    onChangeRange: (range: Range) => void;
}

export const Calendar = ({ blockedDayList, onChangeRange, mode }: Props) => {
    const [currentMonth, setCurrentMonth] = useState(moment(new Date(), DATE_FORMAT));
    const [range, setRange] = useState<Range>()

    const checkRange = (date: Moment) => {
        checkRangeInEditableMode(date)
    }

    const isSelectedCheckInValid = useCallback((date: Moment) =>
        (blockedDayList.some((blockDateRange) => isValidCheckIn(date, blockDateRange, mode))) ? false : true, [blockedDayList, mode])

    const isSelectedRangeValid = useCallback((checkIn: Moment, checkOut: Moment) => {
        if (checkIn.isBefore(checkOut)) {
            return (blockedDayList.some((blockedDay) => (isValidCheckOut(blockedDay, checkIn, checkOut, mode)))) ? false : true
        } return false;
    }, [blockedDayList, mode])

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

const isValidCheckIn = (currentDate: Moment, blockedDateRange: BlockedDay, mode: string) => {
    const range = getBlockedDateRange(blockedDateRange)
    return (mode === BOOKING_MODE) ? (isStrictBetween(currentDate, range.checkin!, range.checkout!)) : (isStrictBetween(currentDate, range.checkin!, range.checkout!) && blockedDateRange.byBooking)
}

const isValidCheckOut = (blockedDay: BlockedDay, checkIn: Moment, checkout: Moment, mode: string) => {
    const blockedCheckIn = moment(blockedDay.checkin, DATE_FORMAT)
    if (mode === BOOKING_MODE) {
        return isNonStrictBetween(blockedCheckIn, checkIn, checkout)
    } else return isStrictBetween(blockedCheckIn, checkIn, checkout) && blockedDay.byBooking
}

const isStrictBetween = (currentDate: Moment, checkIn: Moment, checkout: Moment) => {
    return (currentDate.isSameOrAfter(checkIn) && currentDate.isSameOrBefore(checkout)) ? true : false
}

const isNonStrictBetween = (currentDate: Moment, checkIn: Moment, checkout: Moment) => {
    return (currentDate.isSameOrAfter(checkIn) && currentDate.isBefore(checkout)) ? true : false
}




