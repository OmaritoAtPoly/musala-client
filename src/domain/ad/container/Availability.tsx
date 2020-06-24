import { Moment } from 'moment'
import React, { useState } from 'react'
import { BlockedDay } from '../../../containers/calendar/Calendar'
import { getBlockedDateRange } from '../../../utils/calendar'
import { AVAILABLE, BLOCKED, DATE_FORMAT, UNDEFINED } from '../../../utils/constants'
import { Range } from '../../../utils/type'
import Form from '../component/AvailableDayForm'


export const Availability = () => {
    const [range, setRange] = useState<Range>()
    const [availability, setAvailability] = useState<string>('undefined')
    const [isValidRange, setIsValidRange] = useState<boolean>(true)

    const handleValidRange = () => {
        setIsValidRange(!isValidRange)
    }

    const handldeOnRangeChanged = (range: Range) => {
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

    return <Form
        adTitle={adTitle}
        adRanking={adRanking}
        blockedDays={blockedDays}
        onChangeRange={handldeOnRangeChanged}
        handleValidRangeAlert={handleValidRange}
        validRange={isValidRange}
        onSubmit={onSubmit}
        range={range}
        availability={availability}
    />
}

const handleAvailability = (range: Range, blockedDays: BlockedDay[]) => {
    if (isFullAvailable(range, blockedDays)) {
        return AVAILABLE;
    } else if (isFullBlocked(range, blockedDays)) {
        return BLOCKED;
    } else return UNDEFINED;
}

const isFullBlocked = (range: Range, blockedDateRange: BlockedDay[]) => {
    let checkIn = range.checkin?.clone()
    while (checkIn?.isBefore(range.checkout)) {
        const isBLocked = (isBlocked(checkIn, blockedDateRange));
        if (!isBLocked) return false;
        checkIn.add(24, 'hours')
    }
    return true
}

const isFullAvailable = (range: Range, blockedDateRange: BlockedDay[]) => {
    let checkIn = range.checkin?.clone()
    while (checkIn?.isBefore(range.checkout)) {
        if (isBlocked(checkIn, blockedDateRange)) return false
        checkIn.add(24, 'hours')
    }
    return true
}

const isBlocked = (date: Moment, blockedDay: BlockedDay[]) => {
    for (let i = 0; i < blockedDay.length; i++) {
        const range = getBlockedDateRange(blockedDay[i])
        if (date.isSameOrAfter(range.checkin) && date.isSameOrBefore(range.checkout))
            return true
    } return false
}
