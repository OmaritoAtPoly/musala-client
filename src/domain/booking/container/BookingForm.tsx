import React, { useState } from 'react'
import { BookingDialog } from '../component/BookingDialog'
import { Range } from '../utils'

interface Props {
    adTitle: string;
    adRanking: number;
    adPrice: number;
    visible: boolean;
    bookedDays: Range[];
    handleShowDialog: () => void;

}

export const BookingForm = ({ adTitle, adRanking, adPrice, bookedDays, visible, handleShowDialog }: Props) => {
    const [range, setRange] = useState<Range>()

    const handldeOnRangeChange = (range: Range) => {
        setRange(range)
    }

    return (
        <BookingDialog
            adTitle={adTitle}
            ranking={adRanking}
            price={adPrice}
            bookedDays={bookedDays}
            onRangeChanged={handldeOnRangeChange}
            onClose={handleShowDialog}
            range={range}
            visible={visible}
        />
    )
}