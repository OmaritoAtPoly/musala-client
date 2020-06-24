import moment from 'moment';
import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelectAdByIdQuery } from '../../../generate/types';
import { DATE_FORMAT } from '../../../utils/constants';
import AdDetailView from '../component/detail';

const initialValues = {
    adId: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    ranking: 0,
    blockedDays: []
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
            adId: data.ad.id,
            title: data.ad.title,
            image: data.ad.image,
            price: data.ad.price,
            description: data.ad.description,
            ranking: data.ad.ranking,
            blockedDays: data.ad.blockedDays
        }
    }, [data])

    return (
        <AdDetailView
            handleOnShowDialog={handleOnShowBookingDialog}
            visible={visibleBookingDialog}
            loading={loading}
            errorMessage={errorMessage}
            closeError={closeError}
            setAlertError={setAlertError}
            {...querySetValues}
        />
    )
}