import React from 'react';
import { AdsSeccion } from './AdSeccion';
import Alert from '../../../component/Alert';

interface Props {
    loading: boolean;
    dataSetReady?: JSX.Element[] | undefined;
    errorMessage?: string,
    closeError: () => void;
}

export const Ads = ({ loading, dataSetReady, errorMessage, closeError }: Props) => {
    return (
        <>
            <AdsSeccion loading={loading} title="Popular Places" subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={dataSetReady?.slice(0, 2)} />
            <AdsSeccion loading={loading} title="New places over here" subtitle="Voluptates, exercitationem? Eligendi eveniet, magni" rankedAds={dataSetReady?.slice(2, 5)} />
            <Alert message={errorMessage} open={!!errorMessage} onClose={closeError} />
        </>
    );
} 