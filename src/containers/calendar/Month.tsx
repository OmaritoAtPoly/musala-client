import { Moment } from 'moment'
import React, { useMemo } from 'react'
import { DayModel } from './utils/types'
import MonthView from '../../component/calendar/Month'
import { Week } from './Week'

interface Props {
    dayList: DayModel[]
    month: Moment;
    onDayClick: (date: Moment) => void;
}

export const Month = ({ dayList, month, onDayClick }: Props) => {
    const weeks = useMemo(() => createWeeks(dayList, onDayClick), [dayList, onDayClick])
    return <MonthView month={month} weeks={weeks} />
}

const createWeeks = (dayList: DayModel[], onDayClick: (date: Moment) => void): JSX.Element[] => {
    let weeks: JSX.Element[] = []
    for (let i = 0; i <= dayList.length; i = i + 7) {
        weeks.push(<Week key={i} dayList={dayList.slice(i, i + 7)} onDayClick={onDayClick} />)
    }
    return weeks
}


