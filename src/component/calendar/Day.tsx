import { makeStyles } from '@material-ui/styles'
import { Moment } from 'moment'
import React from 'react'
import { WIDTH_OF_DAY, HEIGHT_OF_DAY } from '../../containers/calendar/utils/constants'
import { DayModel } from '../../containers/calendar/utils/types'

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
        width: WIDTH_OF_DAY,
        height: HEIGHT_OF_DAY,
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