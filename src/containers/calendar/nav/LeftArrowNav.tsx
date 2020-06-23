import React from 'react'
import { IconButton } from '@material-ui/core'
import LeftArrow from '../icons/LeftArrow'
import { makeStyles } from '@material-ui/styles'
import customTheme from '../../../theme'

interface Props {
    previousMonth: () => void;
}

export const LeftArrowNav = ({ previousMonth }: Props) => {
    const classes = useStyles()
    return (
        <IconButton className={classes.arrow} aria-label="nav_left" onClick={previousMonth}>
            <LeftArrow width={'1rem'} height={'1rem'} />
        </IconButton>
    )
}

const useStyles = makeStyles({
    arrow: {
        marginLeft: customTheme.dimension.width.small
    }
});