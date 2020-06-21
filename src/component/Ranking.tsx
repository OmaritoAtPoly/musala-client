import { Theme, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

interface Props {
    ranking: number;
}

export const Ranking = ({ ranking }: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.ratingContainer}>
            <Rating className={classes.rating} value={ranking} readOnly size={'small'} />
            <Typography className={classes.ratingTypo}>{`${ranking} `}</Typography>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    ratingContainer: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center'
    },
    rating: {
        fontSize: '0.8rem',
        marginRight: theme.spacing(1),
        color: theme.palette.primary.main,
    },
    ratingTypo: {
        fontWeight: 'bold',
        marginRight: '.3rem',
        color: theme.palette.text.primary
    }
}));
