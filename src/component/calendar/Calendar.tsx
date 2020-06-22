import React from 'react';
import { Moment } from 'moment';
import { Range } from '../../containers/calendar/utils/types';
import { Year } from '../../containers/calendar/Year';

interface Props {
    currentMonth: Moment;
    blockedDays: Moment[];
    range: Range | undefined;
    setCurrentMonth: (date: Moment) => void;
    handleOnClickedDay: (date: Moment) => void;
}

const Calendar = ({ currentMonth, blockedDays, range, setCurrentMonth, handleOnClickedDay }: Props) => {
    return (
        <Year
            currentMonth={currentMonth}
            blockedDays={blockedDays}
            range={range}
            setCurrentMonth={setCurrentMonth}
            onDayClick={handleOnClickedDay}
        />
    )
}

export default Calendar