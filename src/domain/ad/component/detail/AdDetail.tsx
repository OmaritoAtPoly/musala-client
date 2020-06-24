import { Theme, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Moment } from 'moment';
import React from 'react';
import customTheme from '../../../../theme';
import { PER_NIGHT } from '../../../../utils/constants';
import { BookingForm } from '../../../booking/container/BookingForm';
import { BookPanel } from './BookPanel';
import { DescriptionPanel } from './DescriptionPanel';
import { PicturePanel } from './PicturePanel';
import { TitlePanel } from './TitlePanel';
import Alert from '../../../../component/Alert';

interface Props {
    adId: string;
    title: string;
    description: string;
    image: string;
    price: number;
    ranking: number;
    blockedDays: Moment[]
    handleOnShowDialog: () => void;
    visible: boolean;
    loading: boolean
    closeError: () => void;
    errorMessage: string;
    setAlertError:(value: string) => void;
}

export const AdDetail = ({ setAlertError, adId, errorMessage, closeError, loading, title, description, image, price, ranking, visible, blockedDays, handleOnShowDialog }: Props) => {
    const classes = useStyles()

    return (
        <div>
            {loading && <CircularProgress size={50} className={classes.loading} />}
            <div className={classes.container} >
                <div className={classes.imageContainer} >
                    <PicturePanel urlImage={image} loading={loading} />
                </div>
                <div className={classes.detailContainer}>
                    <TitlePanel ranking={ranking} title={title} />
                    <Typography color='textPrimary' variant='h5' >{`$${price} ${PER_NIGHT}`}</Typography>
                    <BookPanel onClick={handleOnShowDialog} />
                </div>
            </div>
            <DescriptionPanel description={description} />
            <BookingForm
                adId={adId}
                adPrice={price}
                adRanking={ranking}
                adTitle={title}
                blockedDays={blockedDays}
                handleShowDialog={handleOnShowDialog}
                visible={visible}
                setAlertError={setAlertError}
            />
            <Alert
                message={errorMessage}
                open={!!errorMessage}
                onClose={closeError}
            />
        </div>
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
        backgroundColor: customTheme.color.background,
        padding: theme.spacing(2),
        flex: 1,
    },
    detailContainer: {
        backgroundColor: customTheme.color.background,
        padding: theme.spacing(2),
        flex: 1,
    },
    loading: {
        position: 'absolute',
        top: customTheme.spacing.margin.m50,
        left: customTheme.spacing.margin.m50
    }
}));
