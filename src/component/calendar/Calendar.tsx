import React from 'react';
import { Moment } from 'moment';
import { Range } from '../../containers/calendar/utils/types';
import { Year } from '../../containers/calendar/Year';

interface Props {
    currentMonth: Moment;
    bookedDays: Range[];
    range: Range | undefined;
    setCurrentMonth: (date: Moment) => void;
    handleOnClickedDay: (date: Moment) => void;
}

const Calendar = ({ currentMonth, bookedDays, range, setCurrentMonth, handleOnClickedDay }: Props) => {
    return (
        <Year
            currentMonth={currentMonth}
            bookedDays={bookedDays}
            range={range}
            setCurrentMonth={setCurrentMonth}
            onDayClick={handleOnClickedDay}
        />
    )
}

export default Calendar