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
            setRange({ checkIn: date, checkOut: undefined })
            onChangeRange({ checkIn: date, checkOut: undefined })
        } else if (range && range.checkOut === undefined && isSelectedRangeValid(range.checkIn!, date, blockedDays)) {
            const orderedRange = checkRangeOrder(date, range.checkIn!)
            setRange(orderedRange)
            onChangeRange(orderedRange)
        } else if (isSelectedCheckInValid(date, blockedDays)) {
            setRange({ checkIn: date, checkOut: undefined })
            onChangeRange({ checkIn: date, checkOut: undefined })
        }
    }

    const checkRangeInFullEditableMode = (date: Moment) => {
        if (!range) {
            setRange({ checkIn: date, checkOut: undefined })
            onChangeRange({ checkIn: date, checkOut: undefined })
        } else if (range && range.checkOut === undefined) {
            const orderedRange = checkRangeOrder(date, range.checkIn!)
            setRange(orderedRange)
            onChangeRange(orderedRange)
        } else {
            setRange({ checkIn: date, checkOut: undefined })
            onChangeRange({ checkIn: date, checkOut: undefined })
        }
    }

    const handleOnClickedDay = (date: Moment) => {
        checkRange(date)
    }

    return <CalendarView currentMonth={currentMonth} blockedDays={blockedDays} range={range} setCurrentMonth={setCurrentMonth} handleOnClickedDay={handleOnClickedDay} />
}

const checkRangeOrder = (date: Moment, checkIn: Moment): Range => {
    if (date.isBefore(checkIn)) {
        return { checkIn: date, checkOut: checkIn }
    } else return { checkIn: checkIn, checkOut: date }
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


