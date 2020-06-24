import { makeStyles } from '@material-ui/styles';
import React from 'react';
import customTheme from '../../theme';

export const FakeDay = () => {
    const classes = useStyles();
    return <div className={classes.container} />;
};

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: customTheme.dimension.width.day_calendar_width,
        height: customTheme.dimension.height.day_calendar_height,
        backgroundColor: customTheme.color.background
    }
});