import React from 'react'
import { IconButton } from '@material-ui/core'
import RightArrow from '../icons/RightArrow'

interface Props {
    nextMonth: () => void;
}

export const RightArrowNav = ({ nextMonth }: Props) => {
    return (
        <IconButton aria-label="nav_left" onClick={nextMonth}>
            <RightArrow width={'1rem'} height={'1rem'} />
        </IconButton>
    )
}