import React from 'react';
import { Moment } from 'moment';
import { Range } from '../../containers/calendar/utils/types';
import { Year } from '../../containers/calendar/Year';
import { BlockedDay } from '../../containers/calendar/Calendar';

interface Props {
    currentMonth: Moment;
    blockedDayList: BlockedDay[]
    range: Range | undefined;
    setCurrentMonth: (date: Moment) => void;
    handleOnClickedDay: (date: Moment) => void;
}

const Calendar = ({ currentMonth, blockedDayList, range, setCurrentMonth, handleOnClickedDay }: Props) => {
    return (
        <Year
            currentMonth={currentMonth}
            range={range}
            setCurrentMonth={setCurrentMonth}
            onDayClick={handleOnClickedDay}
            blockedDayList={blockedDayList}
        />
    )
}

export default Calendar