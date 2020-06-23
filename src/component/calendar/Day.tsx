import { makeStyles } from '@material-ui/styles'
import { Moment } from 'moment'
import React from 'react'
import { DayModel } from '../../containers/calendar/utils/types'
import customTheme from '../../theme'

interface Props {
    day: DayModel;
    onDayClick: (date: Moment) => void;
    style: any;
}

const Day = ({ day: { dateOfDay }, style, onDayClick }: Props) => {
    const classes = useStyles(style)

    const handleOnClick = () => {
        onDayClick(dateOfDay)
    }
    return (
        <div className={classes().container} onClick={handleOnClick} >
            {dateOfDay.date()}
        </div>
    )
}
export default Day;

const useStyles = (props: any) => makeStyles({
    container: {
        display: 'flex',
        width: customTheme.dimension.width.day_calendar_width,
        height: customTheme.dimension.height.day_calendar_height,
        fontSize: 'small',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            fontWeight: 'bold'
        },
        ...props
    }
});