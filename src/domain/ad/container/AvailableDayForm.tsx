import React, { useState } from 'react'
import { AvailableDayDialog } from '../component/AvailableDayDialog'
import { Moment } from 'moment'
import { DATE_FORMAT, AVAILABLE, BLOCKED, UNDEFINED } from '../../../utils/constants'
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
    const [availability, setAvailability] = useState<string>('undefined')
    const [isValidRange, setIsValidRange] = useState<boolean>(true)

    const handleValidRange = () => {
        setIsValidRange(!isValidRange)
    }

    const handldeOnRangeChange = (range: Range) => {
        if (range && range.checkin && range.checkout)
            setAvailability(handleAvailability(range, blockedDays));
        setRange(range)
    }

    const onSubmit = (availability: string) => {
        setIsValidRange(true);
        setRange(undefined)
        handleShowDialog()
        alert(`adId:${adId},
            availability:${availability}
         checkIn:${ range?.checkin?.format(DATE_FORMAT)},
         checkOut:${ range?.checkout?.format(DATE_FORMAT)}`
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
        availability={availability}
        visible={visible}
    />
}

const handleAvailability = (range: Range, blockedDays: Moment[]) => {
    if (isFullAvailable(range, blockedDays)) {
        return AVAILABLE;
    } else if (isFullBlocked(range, blockedDays)) {
        return BLOCKED;
    } else return UNDEFINED;
}

const isFullBlocked = (range: Range, blockedDayList: Moment[]) => {
    let checkIn = range.checkin?.clone()
    while (checkIn?.isBefore(range.checkout)) {
        const isBLocked = (isBlocked(checkIn, blockedDayList));
        if (!isBLocked) return false;
        checkIn.add(24, 'hours')
    }
    return true
}

const isFullAvailable = (range: Range, blockedDayList: Moment[]) => {
    let checkIn = range.checkin?.clone()
    while (checkIn?.isBefore(range.checkout)) {
        if (isBlocked(checkIn, blockedDayList)) return false
        checkIn.add(24, 'hours')
    }
    return true
}

const isBlocked = (date: Moment, blockedDayList: Moment[]) => {
    for (let i = 0; i < blockedDayList.length; i++) {
        if (date.isSame(blockedDayList[i])) return true;
    } return false;
}
