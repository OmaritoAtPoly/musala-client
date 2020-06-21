import React, { useCallback, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Ad, useListAdsQuery, User } from '../../../generate/types'
import { AdCard } from '../component/AdCard'
import { Ads } from '../component/Ads'

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
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { data, loading, error } = useListAdsQuery();

  const closeError = useCallback(() => {
    setErrorMessage(undefined);
  }, [setErrorMessage])

  const onClickFunction = useCallback(
    (id) => {
      push(`/details-ad:${id}`);
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
  }, [prepareRankedAd, data, onClickFunction])

  const dataSetReady = useMemo(() => prepare(), [prepare]);

  if (error) console.log(error);

  return (
    <Ads loading={loading} dataSetReady={dataSetReady} closeError={closeError} errorMessage={errorMessage} />
  )
}