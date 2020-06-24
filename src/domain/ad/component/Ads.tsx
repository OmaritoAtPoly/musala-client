import { GridSize } from '@material-ui/core';
import React from 'react';
import Alert from '../../../component/Alert';
import Session from '../../../component/Section';

interface Props {
  data: {
    count: GridSize;
    items: any[];
    renderItem: (data: any) => JSX.Element;
    title: string;
    description: string;
    loading?: boolean;
  }[];
  errorMessage?: string;
  closeError: () => void;
}

const Ads = ({ data, errorMessage, closeError }: Props) => {
  return (
    <>
      {data.map((data, i) => (
        <Session {...data} key={i}/>
      ))}
      <Alert
        message={errorMessage}
        open={!!errorMessage}
        onClose={closeError}
      />
    </>
  );
};

export default Ads;
