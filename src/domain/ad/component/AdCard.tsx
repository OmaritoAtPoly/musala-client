import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import customTheme from '../../../theme';

interface Props {
    title: string;
    description: string;
    image: string;
    price: number;
    onClick: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
}

export const AdCard = ({ title, description, image, price, onClick }: Props) => {
    const style = {
        backgroundImage: image,
    }
    const classes = useStyles(style)
    return (
        <div className={classes.card} onClick={onClick}>
            <div className={classes.media} />
            <div className={classes.content}>
                <Typography variant='h4' color='textPrimary'>{title}</Typography>
                <Typography variant='h5' color='textPrimary'>{description}</Typography>
                <Typography variant='body1' color='textPrimary' >{price + ' per night.'}</Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    card: {
        flex: 1,
        width: '100%',
        overflow: 'hidden',
        transition: 'all .2s',
        '&:hover': {
            transform: 'translateY(-.3rem)'
        }
    },
    media: {
        borderTopRightRadius: '.3rem',
        borderTopLeftRadius: '.3rem',
        backgroundColor: customTheme.color.grayLight1,
        height: customTheme.dimension.height.medium
    },
    content: {
        marginTop: '.3rem',
        padding: 0
    },
});