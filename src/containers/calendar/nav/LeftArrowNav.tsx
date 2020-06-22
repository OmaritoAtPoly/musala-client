import React from 'react'
import { IconButton } from '@material-ui/core'
import LeftArrow from '../icons/LeftArrow'

interface Props {
    previousMonth: () => void;
}

export const LeftArrowNav = ({ previousMonth }: Props) => {
    return (
        <IconButton aria-label="nav_left" onClick={previousMonth}>
            <LeftArrow width={'1rem'} height={'1rem'} />
        </IconButton>
    )
}