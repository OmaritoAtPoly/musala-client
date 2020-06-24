import React, { useState } from 'react'
import { BlockedDay } from '../../../containers/calendar/Calendar'
import { DATE_FORMAT } from '../../../utils/constants'
import { BookingDialog } from '../component/BookingDialog'
import { Range } from '../utils'

interface Props {
    adId: string;
    adTitle: string;
    adRanking: number;
    adPrice: number;
    visible: boolean;
    blockedDays: BlockedDay[];
    handleShowDialog: () => void;
}

export const BookingForm = ({ adId, adTitle, adRanking, adPrice, blockedDays, visible, handleShowDialog }: Props) => {
    const [range, setRange] = useState<Range>()
    const [isValidRange, setIsValidRange] = useState<boolean>(true)

    const handleValidRange = () => {
        setIsValidRange(!isValidRange)
    }

    const handldeOnRangeChange = (range: Range) => {
        setRange(range);
    }

    const onSubmit = (pax: number) => {
        setIsValidRange(true);
        setRange(undefined)
        handleShowDialog()
        alert(`adId:${adId},
            pax:${pax},
         totalPaid:${calculateTotalPaid()},
         checkIn:${ range?.checkin?.format(DATE_FORMAT)},
         checkOut:${ range?.checkout?.format(DATE_FORMAT)}`
        )
    }

    const calculateTotalPaid = () => {
        if (range && range.checkin && range.checkout) {
            return adPrice * range.checkout.diff(range.checkin, 'days')
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