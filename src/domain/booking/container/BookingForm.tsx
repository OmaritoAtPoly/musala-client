import React, { useState, useMemo, useCallback } from 'react'
import { BookingDialog } from '../component/BookingDialog'
import { Range } from '../utils'
import { Moment } from 'moment'
import { DATE_FORMAT } from '../../../utils/constants'
import { useCreateBookingMutation, useCurrentUserQuery } from '../../../generate/types'
import { ApolloError } from 'apollo-boost'
import { BlockedDay } from '../../../containers/calendar/Calendar'

interface Props {
    adId: string;
    adTitle: string;
    adRanking: number;
    adPrice: number;
    visible: boolean;
    blockedDays: BlockedDay[];
    handleShowDialog: () => void;
    setAlertError: (value: string) => void;
}

export const BookingForm = ({ setAlertError, adId, adTitle, adRanking, adPrice, blockedDays, visible, handleShowDialog }: Props) => {
    const [range, setRange] = useState<Range>()
    const [isValidRange, setIsValidRange] = useState<boolean>(true)
    const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation();

    const handleValidRange = () => {
        setIsValidRange(!isValidRange)
    }

    const handldeOnRangeChange = (range: Range) => {
        setRange(range);
    }

    const { data: currentUserData } = useCurrentUserQuery({
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
    });

    const isHost = useMemo(() => currentUserData?.currentUser?.role === 'HOST', [currentUserData]);
    const isClient = useMemo(() => currentUserData?.currentUser?.role === 'USER', [currentUserData]);
    const userId = useMemo(() => currentUserData?.currentUser?.id, [currentUserData]);

    const onSubmit = (pax: number) => {
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
        })
            .then(() => {
                setAlertError('todo bien');
            })
            .catch((error: ApolloError) =>
                setAlertError(error.message.replace('GraphQL error:', ''))
            )
    }

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