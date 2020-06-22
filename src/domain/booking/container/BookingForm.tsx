import React, { useState } from 'react'
import { BookingDialog } from '../component/BookingDialog'
import { Range } from '../utils'
import { Moment } from 'moment'
import { DATE_FORMAT } from '../../../utils/constants'

interface Props {
    adId: string;
    adTitle: string;
    adRanking: number;
    adPrice: number;
    visible: boolean;
    blockedDays: Moment[];
    handleShowDialog: () => void;
}

export const BookingForm = ({ adId, adTitle, adRanking, adPrice, blockedDays, visible, handleShowDialog }: Props) => {
    const [range, setRange] = useState<Range>()
    const [isValidRange, setIsValidRange] = useState<boolean>(true)

    const handleValidRange = () => {
        setIsValidRange(!isValidRange)
    }

    const handldeOnRangeChange = (range: Range) => {
        setRange(range)
    }

    const onSubmit = (values: any) => {
        console.log(values)
        console.log(range)
        setIsValidRange(true);
        handleShowDialog()
        alert(`adId:${adId},
         totalPaid:${calculateTotalPaid()},
         checkIn:${ range?.checkIn?.format(DATE_FORMAT)},
         checkOut:${ range?.checkOut?.format(DATE_FORMAT)}`
        )
    }

    const calculateTotalPaid = () => {
        if (range && range.checkIn && range.checkOut) {
            return adPrice * range.checkOut.diff(range.checkIn, 'days')
        } else return 0
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