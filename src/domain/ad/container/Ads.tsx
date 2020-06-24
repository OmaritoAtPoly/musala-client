import { GridSize } from '@material-ui/core';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../../component/Card';
import {
  Ad,
  AdOrderByInput,
  useListAdsQuery,
  User,
} from '../../../generate/types';
import {
  MOST_POPULAR,
  MOST_POPULAR_SUBTITLE,
  PER_NIGHT,
  THE_CHEAPEST,
  THE_CHEAPEST_SUBTITLE,
} from '../../../utils/constants';
import AdsView from '../component/Ads';

type AdListElements = { __typename?: 'Ad' } & Pick<
  Ad,
  'id' | 'title' | 'description' | 'image' | 'price' | 'ranking' | 'createdAt'
> & {
    host: { __typename?: 'User' } & Pick<User, 'fullName'>;
  };

const Ads = () => {
  const { push } = useHistory();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { data, loading, error } = useListAdsQuery();

  const {
    data: dataCheapest,
    loading: loadingCheapest,
    error: errorCheapest,
  } = useListAdsQuery({
    variables: {
      orderBy: 'price_ASC' as AdOrderByInput,
      first: 2,
    },
  });

  useEffect(() => {
    setErrorMessage(
      error?.graphQLErrors.map(({ message }) => message).join(', '),
    );
  }, [error]);

  useEffect(() => {
    setErrorMessage(
      errorCheapest?.graphQLErrors.map(({ message }) => message).join(', '),
    );
  }, [errorCheapest]);

  const closeError = useCallback(() => {
    setErrorMessage(undefined);
  }, [setErrorMessage]);

  const onClickFunction = useCallback(
    (id) => {
      push(`/details-ad:${id}`);
    },
    [push],
  );

  const renderItem = (ad: AdListElements) => (
    <Card
      onClick={() => onClickFunction(ad.id)}
      title={ad.title}
      subTitle={ad.description}
      description={`${ad.price} ${PER_NIGHT}`}
      image={ad.image}
      loading={loading}
    />
  );

  const morePopularSection = useMemo(() => {
    return {
      title: MOST_POPULAR,
      description: MOST_POPULAR_SUBTITLE,
      count: 3 as GridSize,
      renderItem,
      items: data?.ads.slice(0, 3) || [],
      loading,
    };
  }, [data]);

  const cheapestSection = useMemo(() => {
    return {
      title: THE_CHEAPEST,
      description: THE_CHEAPEST_SUBTITLE,
      count: 2 as GridSize,
      renderItem,
      items: dataCheapest?.ads || [],
      loading: loadingCheapest,
    };
  }, [dataCheapest]);

  const allAdsSection = useMemo(() => {
    return {
      title: MOST_POPULAR,
      description: MOST_POPULAR_SUBTITLE,
      count: 4 as GridSize,
      renderItem,
      items: data?.ads || [],
      loading,
    };
  }, [data]);

  return (
    <>
      <AdsView
        data={[morePopularSection, cheapestSection, allAdsSection]}
        errorMessage={errorMessage}
        closeError={closeError}
      />
    </>
  );
};

export default Ads;
