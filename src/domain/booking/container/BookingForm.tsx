import { ApolloError } from 'apollo-boost'
import React, { useCallback, useMemo, useState } from 'react'
import { BlockedDay } from '../../../containers/calendar/Calendar'
import { useCreateBookingMutation, useCurrentUserQuery } from '../../../generate/types'
import { DATE_FORMAT, ERROR_SEVERITY_VALUE, INFO_SEVERITY_VALUE } from '../../../utils/constants'
import { SeverityType } from '../../ad/container/AdDetail'
import { BookingDialog } from '../component/BookingDialog'
import { Range } from '../utils'

interface Props {
    adId: string;
    adTitle: string;
    adRanking: number;
    adPrice: number;
    visible: boolean;
    userId?: string;
    blockedDays: BlockedDay[];
    handleShowDialog: () => void;
    setAlertError: (value: string) => void;
    resetSelectAd: () => void;
    setSeverityValue: (value: SeverityType) => void;
}

export const BookingForm = ({ userId, setSeverityValue, resetSelectAd, setAlertError, adId, adTitle, adRanking, adPrice, blockedDays, visible, handleShowDialog }: Props) => {
    const [range, setRange] = useState<Range>()
    const [isValidRange, setIsValidRange] = useState<boolean>(true)
    const [createBookingMutation, { error }] = useCreateBookingMutation();

    if (error) setAlertError(error.message.replace('GraphQL error:', ''));

    const handleValidRange = () => {
        setIsValidRange(!isValidRange)
    }

    const handldeOnRangeChange = (range: Range) => {
        setRange(range);
    }

    const onSubmit = useCallback((pax: number) => {
        setIsValidRange(true);
        setRange(undefined)
        handleShowDialog()
        createBookingMutation({
            variables: {
                checkin: range?.checkin?.format(DATE_FORMAT),
                checkout: range?.checkout?.format(DATE_FORMAT),
                clientId: userId!,
                pax: pax,
                adId: adId,
            },
        }).then(() => {
            setAlertError('You\'ve made a new booking');
            setSeverityValue(INFO_SEVERITY_VALUE);
        })
            .then(() => {
                resetSelectAd();
            })
            .catch((error: ApolloError) => {
                setAlertError(error.message.replace('GraphQL error:', ''));
                setSeverityValue(ERROR_SEVERITY_VALUE);
            }
            )
    }, [setIsValidRange, setRange, handleShowDialog, createBookingMutation, range])

    return (
        <BookingDialog
            adTitle={adTitle}
            ranking={adRanking}
            price={adPrice}
            blockedDays={blockedDays}
            onRangeChanged={handldeOnRangeChange}
            handleValidRangeAlert={handleValidRange}
            validRange={isValidRange}
            onSubmit={onSubmit}
            onClose={handleShowDialog}
            range={range}
            visible={visible}
        />
    )
}