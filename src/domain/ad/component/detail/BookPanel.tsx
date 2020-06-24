import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { PrimaryButton } from '../../../../component/PrimaryButton';
import { BOOK_NOW } from '../../../../utils/constants';

interface Props {
    onClick: () => void;
    userId?: string;
}

export const BookPanel = ({ userId, onClick }: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.button} >
            {
             userId && <PrimaryButton onClick={onClick} variant='outlined' size='small'>{BOOK_NOW}</PrimaryButton>
            }
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        marginTop: theme.spacing(2),
        display: 'inline-block'
    }
}));