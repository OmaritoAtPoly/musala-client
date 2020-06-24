import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelectAdByIdQuery } from '../../../generate/types';
import AdDetailView from '../component/detail';

export type SeverityType = "success" | "info" | "warning" | "error" | undefined;

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
    const [errorMessage, setAlertError] = useState('');
    const [severityValue, setSeverity] = useState<SeverityType>("error");

    const { data, loading, error, refetch } = useSelectAdByIdQuery({
        variables: {
            id: id
        },
    });

    const handleSeverityValue = useCallback((value: SeverityType) => {
        setSeverity(value);
    }, [setSeverity]);

    const closeError = useCallback(() => {
        setAlertError('');
    }, [setAlertError]);

    const handleOnShowBookingDialog = () => {
        setVisibleBookingDialog(!visibleBookingDialog)
    }

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
            resetSelectAd={refetch}
            setSeverityValue={handleSeverityValue}
            severityValue={severityValue}
            {...querySetValues}
        />
    )
}