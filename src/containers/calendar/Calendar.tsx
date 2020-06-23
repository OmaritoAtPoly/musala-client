import moment, { Moment } from 'moment';
import React, { useState } from 'react';
import { Range } from './utils/types';
import CalendarView from '../../component/calendar/Calendar'
import { DATE_FORMAT, FULL_EDITABLE_MODE } from '../../utils/constants';

interface Props {
    blockedDays: Moment[];
    onChangeRange: (range: Range) => void;
    mode: string;
}

export const Calendar = ({ blockedDays, mode, onChangeRange }: Props) => {
    const [currentMonth, setCurrentMonth] = useState(moment(new Date(), DATE_FORMAT));
    const [range, setRange] = useState<Range>()

    const checkRange = (date: Moment) => {
        if (mode === FULL_EDITABLE_MODE) {
            checkRangeInFullEditableMode(date)
        } else checkRangeInEditableMode(date)
    }

    const checkRangeInEditableMode = (date: Moment) => {
        if (!range && isSelectedCheckInValid(date, blockedDays)) {
            setRange({ checkin: date, checkout: undefined })
            onChangeRange({ checkin: date, checkout: undefined })
        } else if (range && range.checkout === undefined && isSelectedRangeValid(range.checkin!, date, blockedDays)) {
            const orderedRange = checkRangeOrder(date, range.checkin!)
            setRange(orderedRange)
            onChangeRange(orderedRange)
        } else if (isSelectedCheckInValid(date, blockedDays)) {
            setRange({ checkin: date, checkout: undefined })
            onChangeRange({ checkin: date, checkout: undefined })
        }
    }

    const checkRangeInFullEditableMode = (date: Moment) => {
        if (date.isSameOrAfter(moment()))
            if (!range) {
                setRange({ checkin: date, checkout: undefined })
                onChangeRange({ checkin: date, checkout: undefined })
            } else if (range && range.checkout === undefined) {
                const orderedRange = checkRangeOrder(date, range.checkin!)
                setRange(orderedRange)
                onChangeRange(orderedRange)
            } else {
                setRange({ checkin: date, checkout: undefined })
                onChangeRange({ checkin: date, checkout: undefined })
            }
    }

    const handleOnClickedDay = (date: Moment) => {
        checkRange(date)
    }

    return <CalendarView currentMonth={currentMonth} blockedDays={blockedDays} range={range} setCurrentMonth={setCurrentMonth} handleOnClickedDay={handleOnClickedDay} />
}

const checkRangeOrder = (date: Moment, checkIn: Moment): Range => {
    if (date.isBefore(checkIn)) {
        return { checkin: date, checkout: checkIn }
    } else return { checkin: checkIn, checkout: date }
}

const isSelectedCheckInValid = (date: Moment, blockedDays: Moment[]) => {
    for (let i = 0; i < blockedDays.length; i++) {
        if (date.isSame(blockedDays[i])) {
            return false;
        }
    } return true;
}

const isSelectedRangeValid = (checkIn: Moment, checkOut: Moment, blockedDays: Moment[]) => {
    if (checkIn.isBefore(checkOut)) {
        for (let i = 0; i < blockedDays.length; i++) {
            if (blockedDays[i].isBetween(checkIn, checkOut)) return false;
        } return true;
    } return false;
}


