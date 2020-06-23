import React, { useState } from 'react'
import { AvailableDayDialog } from '../component/AvailableDayDialog'
import { Moment } from 'moment'
import { DATE_FORMAT } from '../../../utils/constants'
import { Range } from '../../../utils/type'

interface Props {
    adId: string;
    adTitle: string;
    adRanking: number;
    visible: boolean;
    blockedDays: Moment[];
    handleShowDialog: () => void;
}

export const AvailableDayForm = ({ adId, adTitle, adRanking, blockedDays, visible, handleShowDialog }: Props) => {
    const [range, setRange] = useState<Range>()
    const [isValidRange, setIsValidRange] = useState<boolean>(true)

    const handleValidRange = () => {
        setIsValidRange(!isValidRange)
    }

    const handldeOnRangeChange = (range: Range) => {
        setRange(range)
    }

    const onSubmit = () => {
        setIsValidRange(true);
        setRange(undefined)
        handleShowDialog()
        alert(`adId:${adId},
         checkIn:${ range?.checkIn?.format(DATE_FORMAT)},
         checkOut:${ range?.checkOut?.format(DATE_FORMAT)}`
        )
    }

    return <AvailableDayDialog
        adTitle={adTitle}
        ranking={adRanking}
        blockedDays={blockedDays}
        onRangeChanged={handldeOnRangeChange}
        handleValidRangeAlert={handleValidRange}
        validRange={isValidRange}
        onSubmit={onSubmit}
        onClose={handleShowDialog}
        range={range}
        availability={'blocked'}
        visible={visible}
    />
}