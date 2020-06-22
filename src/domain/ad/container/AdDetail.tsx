import React, { useState } from 'react';
import AdDetailView from '../component/detail';
import moment from 'moment';
import { DATE_FORMAT } from '../../../utils/constants'

export const AdDetail = () => {
    const [visibleBookingDialog, setVisibleBookingDialog] = useState<boolean>(false)

    const handleOnShowBookingDialog = () => {
        setVisibleBookingDialog(!visibleBookingDialog)
    }

    return (
        <AdDetailView
            handleOnShowDialog={handleOnShowBookingDialog}
            visible={visibleBookingDialog}
            {...getMockAd()}
        />
    )
}

const getMockAd = () => {
    return {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'urlImage',
        price: 25,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, modi! Cumque impedit, quia quidem itaque inventore dolor sed quos, odio soluta tempore eum in? Iste facere similique minus atque eum.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, modi! Cumque impedit, quia quidem itaque inventore dolor sed quos, odio soluta tempore eum in? Iste facere similique minus atque eum.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, modi! Cumque impedit, quia quidem itaque inventore dolor sed quos, odio soluta tempore eum in? Iste facere similique minus atque eum.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, modi! Cumque impedit, quia quidem itaque inventore dolor sed quos, odio soluta tempore eum in? Iste facere similique minus atque eum.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, modi! Cumque impedit, quia quidem itaque inventore dolor sed quos, odio soluta tempore eum in? Iste facere similique minus atque eum.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, modi! Cumque impedit, quia quidem itaque inventore dolor sed quos, odio soluta tempore eum in? Iste facere similique minus atque eum.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, modi! Cumque impedit, quia quidem itaque inventore dolor sed quos, odio soluta tempore eum in? Iste facere similique minus atque eum.
        `,
        ranking: 4,
        bookedDays: [{ checkIn: moment('2020-07-10', DATE_FORMAT), checkOut: moment('2020-07-15', DATE_FORMAT) }]
    }
}