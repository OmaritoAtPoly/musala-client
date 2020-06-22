import React from 'react'
import { Moment } from 'moment'
import { makeStyles } from '@material-ui/styles'
import { DayModel } from './utils/types'
import { Day } from './Day'


interface Props {
    dayList: DayModel[]
    onDayClick: (date: Moment) => void;
}

export const Week = ({ dayList, onDayClick }: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.container} >
            {dayList.map((day: DayModel, index: number) => <Day key={index} day={day} onDayClick={onDayClick} />)}
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        width: 'fit-content',
        marginTop: '.2rem'
    }
});