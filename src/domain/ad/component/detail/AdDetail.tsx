import React from 'react';
import { DescriptionPanel } from './DescriptionPanel';
import { PricePanel } from './PricePanel';
import { TitlePanel } from './TitlePanel';

interface Props {
    title: string;
    description: string;
    image: string;
    price: number;
}

export const AdDetail = ({ title, description, image, price }: Props) => {

    return (
        <div>
            <TitlePanel title={title} image={image} />
            <PricePanel price={price} />
            <DescriptionPanel description={description} />
        </div>
    )
}

