import React from 'react'
import { fetchMockAdList } from '../../../utils/mockDatas'
import { AdCard } from '../component/AdCard'
import { AdsRow } from '../component/AdRow'

export const AdContent = () => {
    const adList = fetchMockAdList()
    const ads = getAds(adList)
    return (
        <>
            <AdsRow title="Lorem ipsum, dolor sit amet." subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={ads.slice(0, 3)} />
            <AdsRow title="Lorem ipsum, dolor sit amet." subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={ads.slice(0, 4)} />
        </>
    )
}

export const getAds = (rankedAds: any[]): JSX.Element[] => {
    return rankedAds.map((ad) => prepareRankedAd(ad))
};

const prepareRankedAd = (ad: any): JSX.Element => {
    return <AdCard title={ad.title} description={ad.description} image={ad.image} price={ad.price} />
};