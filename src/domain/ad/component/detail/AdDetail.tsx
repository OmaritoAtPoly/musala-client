import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import customTheme from '../../../../theme';
import { PER_NIGHT } from '../../../../utils/constants';
import { Range } from '../../../booking/utils';
import { BookPanel } from './BookPanel';
import { DescriptionPanel } from './DescriptionPanel';
import { PicturePanel } from './PicturePanel';
import { TitlePanel } from './TitlePanel';
import { BookingForm } from '../../../booking/container/BookingForm';

interface Props {
    title: string;
    description: string;
    image: string;
    price: number;
    ranking: number;
    bookedDays: Range[]
    handleOnShowDialog: () => void;
    visible: boolean;
}

export const AdDetail = ({ title, description, image, price, ranking, visible, bookedDays, handleOnShowDialog }: Props) => {
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
                    <BookPanel onClick={handleOnShowDialog} />
                </div>
            </div>
            <DescriptionPanel description={description} />
            <BookingForm
                adPrice={price}
                adRanking={ranking}
                adTitle={title}
                bookedDays={bookedDays}
                handleShowDialog={handleOnShowDialog}
                visible={visible}
            />
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
