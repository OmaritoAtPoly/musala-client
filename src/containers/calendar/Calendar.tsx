import moment, { Moment } from 'moment';
import React, { useState } from 'react';
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

    const checkRangeInEditableMode = (date: Moment) => {
        if (!range && isSelectedCheckInValid(date, blockedDayList)) {
            setRange({ checkin: date, checkout: undefined })
            onChangeRange({ checkin: date, checkout: undefined })
        } else if (range && range.checkout === undefined && isSelectedRangeValid(range.checkin!, date, blockedDayList)) {
            const orderedRange = checkRangeOrder(date, range.checkin!)
            setRange(orderedRange)
            onChangeRange(orderedRange)
        } else if (isSelectedCheckInValid(date, blockedDayList)) {
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
        // if (blockedDays.some((range) => (moment(range.checkin).isBetween(checkIn, checkOut) && range.byBooking))) return false;
        // return false;
        for (let i = 0; i < blockedDays.length; i++) {
            const range = getBlockedDateRange(blockedDays[i])
            if (range.checkin!.isBetween(checkIn, checkOut) && blockedDays[i].byBooking) return false;
        } return true;
    } return false;
}

// if (checkIn.isBefore(checkOut)) {
//     return (blockedDays.some((blockedDay) => (moment(blockedDay.checkin).isBetween(checkIn, checkOut) && blockedDay.byBooking))) ? false : true
// }





