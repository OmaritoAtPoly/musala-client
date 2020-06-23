import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { WEEK_DAYS } from '../../utils/constants';
import customTheme from '../../theme';

export const WeekDay = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {WEEK_DAYS.map((day) => (
                <div key={day} className={classes.weekDay}>
                    {day}
                </div>
            ))}
        </div>
    );
};

const useStyles = makeStyles({
    container: {
        display: 'flex',
    },
    weekDay: {
        width: customTheme.dimension.width.day_calendar_width,
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 'small',
        justifyContent: 'center'
    }
});
