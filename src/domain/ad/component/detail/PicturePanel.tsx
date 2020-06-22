import React from 'react'
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface Props {
    urlImage: string;
}

export const PicturePanel = ({ urlImage }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.img}>
            <img src={urlImage} />
        </div>
    )
}

const useStyles = makeStyles({
    img: {
        backgroundColor: '#ccc',
        height: '300px',
    },
});