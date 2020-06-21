import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import customTheme from '../../../../theme';
import { PER_NIGHT } from '../../../../utils/constants';
import { BookPanel } from './BookPanel';
import { DescriptionPanel } from './DescriptionPanel';
import { PicturePanel } from './PicturePanel';
import { TitlePanel } from './TitlePanel';

interface Props {
    title: string;
    description: string;
    image: string;
    price: number;
    onBook: () => void;
}

export const AdDetail = ({ title, description, image, price, onBook }: Props) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.container} >
                <div className={classes.imageContainer} >
                    <PicturePanel urlImage={image} />
                </div>
                <div className={classes.detailContainer}>
                    <TitlePanel ranking={5} title={title} />
                    <Typography color='textPrimary' variant='h5' >{`$${price} ${PER_NIGHT}`}</Typography>
                    <BookPanel onClick={onBook} />
                </div>
            </div>
            <DescriptionPanel description={description} />
        </>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'row wrap',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: theme.spacing(2),
        flex: 1,
    },
    detailContainer: {
        backgroundColor: customTheme.color.background,
        padding: theme.spacing(2),
        flex: 1,
    }
}));
