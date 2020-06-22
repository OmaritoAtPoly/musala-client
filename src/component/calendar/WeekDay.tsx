import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { WIDTH_OF_DAY, WEEK_DAYS } from '../../containers/calendar/utils/constants';

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
        width: WIDTH_OF_DAY,
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 'small',
        justifyContent: 'center'
    }
});
