import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { WIDTH_OF_DAY, HEIGHT_OF_DAY } from '../../utils/constants';

export const FakeDay = () => {
    const classes = useStyles();
    return <div className={classes.container} />;
};

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: WIDTH_OF_DAY,
        height: HEIGHT_OF_DAY,
        backgroundColor: 'white'
    }
});
