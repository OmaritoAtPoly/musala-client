import React, { useCallback } from 'react'
import { fetchMockAdList } from '../../../utils/mockDatas'
import { AdCard } from '../component/AdCard'
import { AdsRow } from '../component/AdRow'
import { useHistory } from 'react-router-dom'

export const AdContent = () => {
    const { push } = useHistory();
    const onClickMock = useCallback(
      () => {
        push('/details-ad:id-test');
      },
      [push],
    )
    const adList = fetchMockAdList();
    const ads = getAds(adList,onClickMock);
    return (
        <>
            <AdsRow title="Lorem ipsum, dolor sit amet." subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={ads.slice(0, 3)} />
            <AdsRow title="Lorem ipsum, dolor sit amet." subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={ads.slice(0, 4)} />
        </>
    )
}

export const getAds = (
  rankedAds: any[],
  onClickMock: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)): JSX.Element[] => {
    return rankedAds.map((ad) => prepareRankedAd(ad, onClickMock))
};

const onClickMock = ()=>{

}

const prepareRankedAd = (
  ad: any,
  onClickMock: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
  ): JSX.Element => {
    return <AdCard onClick={onClickMock} title={ad.title} description={ad.description} image={ad.image} price={ad.price} />
};