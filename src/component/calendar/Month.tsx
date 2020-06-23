import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { WeekDay } from './WeekDay';
import { Moment } from 'moment';
import customTheme from '../../theme';

interface Props {
    month: Moment
    weeks: JSX.Element[]
}

const Month = ({ month, weeks }: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.container} >
            <div className={classes.month} >
                <span className={classes.name}>{month.format('MMMM YYYY')}</span>
                <WeekDay />
                {weeks}
            </div>
        </div>
    )
}

export default Month;

const useStyles = makeStyles({
    container: {
        width: 'fit-content',
        margin: '-1.8rem 1.5rem 0 1.5rem',
    },
    month: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        display: 'flex',
        width: customTheme.dimension.width.w100,
        fontWeight: 'bold',
        fontSize: 'small',
        justifyContent: 'center',
        marginBottom: customTheme.spacing.margin.small
    }
});
