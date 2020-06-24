import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import customTheme from '../../../../theme';

interface Props {
  description: string;
  date?: string;
}
const ItemDescriptions = ({ description, date }: Props) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.description}
      variant={'body1'}
      color={'textPrimary'}
    >
      {' '}
      {description}
      {date}{' '}
    </Typography>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: `${customTheme.dimension.width.w100}`,
    flexDirection: 'row',
  },
  description: {
    marginTop: `${customTheme.spacing.margin.smaller}`,
    border: `1px solid ${customTheme.color.grayLight1}`,
    borderRadius: `${customTheme.borderRadius.small}`,
    paddingLeft: customTheme.spacing.margin.smaller,
  },
});

export default ItemDescriptions;
