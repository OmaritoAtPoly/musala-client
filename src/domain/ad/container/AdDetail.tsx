import React, { useState } from 'react'
import AdDetailView from '../component/detail'

export const AdDetail = () => {
    const [visibleBookingDialog, setVisibleBookingDialog] = useState<boolean>(false)

    const onBook = () => {
        setVisibleBookingDialog(!visibleBookingDialog)
    }

    return (
        <AdDetailView
            onBook={onBook}
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
        `
    }
}