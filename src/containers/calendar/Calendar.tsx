import moment, { Moment } from 'moment';
import React, { useState } from 'react';
import { DATE_FORMAT } from '../../utils/constants';
import { Range } from './utils/types';
import CalendarView from '../../component/calendar/Calendar'

interface Props {
    bookedDays: Range[];
    onChangeRange: (range: Range) => void;
}

export const Calendar = ({ bookedDays, onChangeRange }: Props) => {
    const [currentMonth, setCurrentMonth] = useState(moment(new Date(), DATE_FORMAT));
    const [range, setRange] = useState<Range>()

    const checkRange = (date: Moment) => {
        if (!range && isSelectedCheckInValid(date, bookedDays)) {
            setRange({ checkIn: date, checkOut: undefined })
            onChangeRange({ checkIn: date, checkOut: undefined })
        } else if (range && range.checkOut === undefined && isSelectedRangeValid(range.checkIn!, date, bookedDays)) {
            const orderedRange = checkRangeOrder(date, range.checkIn!)
            setRange(orderedRange)
            onChangeRange(orderedRange)
        } else if (isSelectedCheckInValid(date, bookedDays)) {
            setRange({ checkIn: date, checkOut: undefined })
            onChangeRange({ checkIn: date, checkOut: undefined })
        }
    }

    const handleOnClickedDay = (date: Moment) => {
        checkRange(date)
    }

    return <CalendarView currentMonth={currentMonth} bookedDays={bookedDays} range={range} setCurrentMonth={setCurrentMonth} handleOnClickedDay={handleOnClickedDay} />
}

const checkRangeOrder = (date: Moment, checkIn: Moment): Range => {
    if (date.isBefore(checkIn)) {
        return { checkIn: date, checkOut: checkIn }
    } else return { checkIn: checkIn, checkOut: date }
}

const isSelectedCheckInValid = (date: Moment, bookedDays: Range[]) => {
    for (let i = 0; i < bookedDays.length; i++) {
        if (date.isSame(bookedDays[i].checkIn) || date.isBetween(bookedDays[i].checkIn, bookedDays[i].checkOut)) {
            return false;
        }
    } return true;
}

const isSelectedRangeValid = (checkIn: Moment, checkOut: Moment, bookedDays: Range[]) => {
    if (checkIn.isBefore(checkOut)) {
        for (let i = 0; i < bookedDays.length; i++) {
            if (bookedDays[i].checkIn?.isBetween(checkIn, checkOut)) return false;
        } return true;
    } return false;
}


