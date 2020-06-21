import { SvgIcon, Theme } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles';
import React, { FC } from 'react';
import customTheme from '../theme';

const BrandContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: customTheme.spacing.padding.none,
});

const Brand: FC<{}> = () => {
  const classes = useStyles();
  return (
    <BrandContainer>
      <SvgIcon className={classes.icon}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </BrandContainer>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

export default Brand;
