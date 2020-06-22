import React from 'react'
import { IconButton } from '@material-ui/core'
import RightArrow from '../icons/RightArrow'
import { makeStyles } from '@material-ui/styles'

interface Props {
    nextMonth: () => void;
}

export const RightArrowNav = ({ nextMonth }: Props) => {
    const classes = useStyles()
    return (
        <IconButton className={classes.arrow} aria-label="nav_left" onClick={nextMonth}>
            <RightArrow width={'1rem'} height={'1rem'} />
        </IconButton>
    )
}


const useStyles = makeStyles({
    arrow: {
        marginRight: '1rem'
    }
});