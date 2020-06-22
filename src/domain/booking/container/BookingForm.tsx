import React, { useState } from 'react'
import { BookingDialog } from '../component/BookingDialog'
import { Range } from '../utils'
import { Moment } from 'moment'

interface Props {
    adTitle: string;
    adRanking: number;
    adPrice: number;
    visible: boolean;
    blockedDays: Moment[];
    handleShowDialog: () => void;

}

export const BookingForm = ({ adTitle, adRanking, adPrice, blockedDays, visible, handleShowDialog }: Props) => {
    const [range, setRange] = useState<Range>()

    const handldeOnRangeChange = (range: Range) => {
        setRange(range)
    }

    const onSubmit = (values: any) => {
        console.log(values)
        console.log(range)
    }

    return (
        <BookingDialog
            adTitle={adTitle}
            ranking={adRanking}
            price={adPrice}
            blockedDays={blockedDays}
            onRangeChanged={handldeOnRangeChange}
            onSubmit={onSubmit}
            onClose={handleShowDialog}
            range={range}
            visible={visible}
        />
    )
}