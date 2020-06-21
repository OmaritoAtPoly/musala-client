import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Image from 'material-ui-image';
import React, { useCallback } from 'react';

interface Props {
    adId: string;
    title: string;
    description: string;
    image: string;
    price: number;
    onClick: (value: string) => void;
    loading: boolean,
}

export const AdCard = ({ adId, loading, title, description, image, price, onClick }: Props) => {

    const handleClick = useCallback(() => {
        onClick(adId);
    }, [onClick, adId])

    const classes = useStyles();

    return (
        <div className={classes.card} onClick={handleClick}>
            <div className={`${classes.content}`}>
                <Image
                    src={image}
                    aspectRatio={(16 / 9)}
                    disableSpinner={loading}
                />
                <div className={classes.texts}>
                    <Typography variant='h4' color='textPrimary'>{title}</Typography>
                    <Typography variant='h5' color='textPrimary'>{description}</Typography>
                    <Typography variant='body1' color='textPrimary' >{price + ' per night.'}</Typography>
                </div>
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
        },
    },
    content: {
        marginBottom: '10px',
        padding: 0,
    },
    texts: {
        marginTop: '10px',
    },
});