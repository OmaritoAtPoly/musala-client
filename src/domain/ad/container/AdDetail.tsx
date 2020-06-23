import moment from 'moment';
import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelectAdByIdQuery } from '../../../generate/types';
import { DATE_FORMAT } from '../../../utils/constants';
import AdDetailView from '../component/detail';

const initialValues = {
    title: '',
    image: '',
    price: 0,
    description: '',
    ranking: 0,
    bookedDays: [{ checkin: moment( DATE_FORMAT), checkout: moment( DATE_FORMAT) }]
}

export const AdDetail = () => {

    const { id } = useParams()
    const [visibleBookingDialog, setVisibleBookingDialog] = useState<boolean>(false)
    const [errorMessage, setAlertError] = useState<string>('');

    const closeError = useCallback(() => {
        setAlertError('');
      }, [setAlertError]);
     
    const handleOnShowBookingDialog = () => {
        setVisibleBookingDialog(!visibleBookingDialog)
    }

    const { data, loading, error } = useSelectAdByIdQuery({
        variables: {
            id: id
        },
    });

    if (error) setAlertError(error?.graphQLErrors.map(({ message }) => message).join(', '))

    const querySetValues = useMemo(() => {
        if (!data || !data.ad) return initialValues;
        return {
            title: data.ad.title,
            image: data.ad.image,
            price: data.ad.price,
            description: data.ad.description,
            ranking: data.ad.ranking,
            bookedDays: [{
                checkin: moment(data.ad.blockedDays.map(day => day.checkin).find(a => a), DATE_FORMAT),
                checkout: moment(data.ad.blockedDays.map(day => day.checkout).find(a => a), DATE_FORMAT)
            }],
        } 
    }, [data])

    return (
        <AdDetailView
            handleOnShowDialog={handleOnShowBookingDialog}
            visible={visibleBookingDialog}
            loading={loading}
            errorMessage={errorMessage}
            closeError={closeError}
            {...querySetValues}
        />
    )
}