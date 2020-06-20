import { CircularProgress } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Ad, useListAdsQuery, User } from '../../../generate/types'
import { AdCard } from '../component/AdCard'
import { AdsRow } from '../component/AdRow'

type AdlistElements = (
  { __typename?: 'Ad' }
  & Pick<Ad, 'id' | 'title' | 'description' | 'image' | 'price' | 'ranking' | 'createdAt'>
  & {
    host: (
      { __typename?: 'User' }
      & Pick<User, 'fullName'>
    )
  }
)

export const AdContent = () => {
  const { push } = useHistory();
  const { data, loading, error } = useListAdsQuery();

  const onClickMock = useCallback(
    ({ title }) => {
      alert("title")
      // push('/details-ad:id-test');
    },
    [push],
  )

  const prepare = useCallback(() => {
    let result;
    if (data) {
      result = data.ads.map((a: AdlistElements | null) => {
        return prepareRankedAd(a as AdlistElements, onClickMock)
      });
    }
    return result
  }, [data, onClickMock])

  const prepareRankedAd = useCallback((
    ad: AdlistElements,
    onClickMock: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)) => {
    return <AdCard onClick={onClickMock} title={ad.title} description={ad.description} image={ad.image} price={ad.price} />
  }, []
  )

  if (error) console.log("oooooooooooooooo", error)
  if (loading) return <CircularProgress size={20} />

  
  const dataSetReady = prepare();

  return (
    <>
      <AdsRow title="Lorem ipsum, dolor sit amet." subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={dataSetReady?.slice(0, 4)} />
      <AdsRow title="Lorem ipsum, dolor sit amet." subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={dataSetReady?.slice(0, 4)} />
    </>
  )
}
