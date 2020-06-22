import React from 'react';
import { AdSeccions } from './AdSeccion';
import Alert from '../../../component/Alert';
import { LOREM_TITLE, LOREM_BODY } from '../../../utils/constants';

interface Props {
    loading: boolean;
    dataSetReady?: JSX.Element[] | undefined;
    errorMessage?: string,
    closeError: () => void;
}

export const Ads = ({ loading, dataSetReady, errorMessage, closeError }: Props) => {
    return (
        <>
            <AdSeccions loading={loading} title={LOREM_TITLE} subtitle={LOREM_BODY} rankedAds={dataSetReady?.slice(0, 2)} />
            <AdSeccions loading={loading} title={LOREM_TITLE} subtitle={LOREM_BODY} rankedAds={dataSetReady?.slice(2, dataSetReady.length)} />
            <Alert message={errorMessage} open={!!errorMessage} onClose={closeError} />
        </>
    );
} 