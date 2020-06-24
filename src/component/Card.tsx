import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Image from 'material-ui-image';
import React from 'react';
import customTheme from '../theme';

interface Props {
  title: string;
  subTitle: string;
  image: string;
  description: string;
  onClick: () => void;
  loading: boolean;
}

const Card = ({
  loading,
  title,
  description,
  image,
  subTitle,
  onClick,
}: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.card} onClick={onClick}>
      <div className={`${classes.content}`}>
        <Image src={image} aspectRatio={16 / 9} disableSpinner={loading} />
        <div className={classes.texts}>
          <Typography variant="h4" color="textPrimary">
            {title.slice(0, 40)}
          </Typography>
          <Typography variant="h5" color="textPrimary">
            {subTitle.slice(0, 40)}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {description.slice(0, 80)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Card;

const useStyles = makeStyles({
  card: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    transition: 'all .2s',
    '&:hover': {
      transform: 'translateY(-.3rem)',
    },
  },
  content: {
    marginBottom: customTheme.spacing.margin.medium,
    marginTop: customTheme.spacing.margin.none,
    padding: customTheme.spacing.padding.none,
  },
  texts: {
    marginTop: customTheme.spacing.margin.smaller,
  },
});
