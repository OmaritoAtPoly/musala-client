import React, { useCallback, useMemo } from 'react'
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
  
  
  const onClickFunction = useCallback(
    (id) => {
      alert(id)
      // push('/details-ad:id-test');
    },
    [push],
    )
    
    const prepareRankedAd = useCallback((
      ad: AdlistElements,
      onClickFunction: (value: string) => void) => {
        return <AdCard onClick={onClickFunction} adId={ad.id} title={ad.title} description={ad.description} image={ad.image} price={ad.price} loading={loading} />
      }, [onClickFunction])
      
      const prepare = useCallback(() => {
        let result;
        if (data) {
          result = data.ads.map((a: AdlistElements | null) => {
            return prepareRankedAd(a as AdlistElements, onClickFunction)
          });
        }
        return result
      }, [prepareRankedAd,data, onClickFunction])
      
      const dataSetReady = useMemo(() => prepare(), [prepare]);
      
      if (error) console.log((error?.graphQLErrors.map(({ message }) => (message)).join(", ")))

      return (
    <>
      <AdsRow loading={loading} title="Popular Places" subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={dataSetReady?.slice(0, 2)} />
      <AdsRow loading={loading} title="New places over here" subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={dataSetReady?.slice(2, 5)} />
    </>
  )
}