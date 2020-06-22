import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Ranking } from '../../../../component/Ranking';

interface Props {
    title: string;
    ranking: number;
}

export const TitlePanel = ({ title, ranking }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.title} >
            <Typography color='textPrimary' variant='h3' >{title}</Typography>
            <Ranking ranking={ranking} />
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: theme.spacing(2),
    }
}));