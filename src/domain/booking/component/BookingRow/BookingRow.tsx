import { makeStyles } from '@material-ui/styles';
import React from 'react';
import customTheme, { theme } from '../../../../theme';
import { CREATE_AT, RESERVED_AT } from '../../../../utils/constants';
import ItemDate from './ItemDate';
import ItemDescriptions from './ItemDescriptions';
import ItemHouse from './ItemHouse';
import UserItem from './ItemUser';
import { Box } from '@material-ui/core';

export interface Props {
  checkin: string;
  checkout: string;
  createdAt: string;
  email: string;
  emailHost: string;
  fullName: string;
  title: string;
  image: string;
  host: string;
  createAtAdd: string;
  widthImage: number;
  heightImage: number;
  widthIcon: number;
  heightIcon: number;
}

const BookingRow = ({
  checkin,
  checkout,
  createdAt,
  email,
  emailHost,
  fullName,
  title,
  image,
  host,
  createAtAdd,
  widthImage,
  widthIcon,
  heightImage,
  heightIcon,
}: Props) => {
  const classes = useStyles();
  return (
    <Box boxShadow={3} bgcolor="background.paper">
      <div className={classes.container}>
        <div className={classes.leftSide}>
          <ItemHouse
            picture={image}
            width={widthImage}
            height={heightImage}
            title={title}
          />
          <div className={classes.detalles}>
            <ItemDate
              checkin={checkin}
              checkout={checkout}
              width={widthIcon}
              height={heightIcon}
            />
            <ItemDescriptions description={CREATE_AT} date={createAtAdd} />
            <ItemDescriptions description={RESERVED_AT} date={createdAt} />
          </div>
        </div>
        <div className={classes.rightSide}>
          <UserItem email={email} name={fullName} role={'Client'} />
          <UserItem email={emailHost} name={host} role={'Host'} />
        </div>
      </div>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: customTheme.dimension.width.w100,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: customTheme.spacing.margin.none,
    marginTop: customTheme.spacing.margin.medium,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  leftSide: {
    width: `${customTheme.dimension.width.w50}`,
    flexDirection: 'column',
    marginLeft: `${customTheme.spacing.margin.medium}`,
    paddingRight: `${customTheme.spacing.margin.bigger}`,
    [theme.breakpoints.down('sm')]: {
      width: `${customTheme.dimension.width.w90}`,
      marginLeft: `${customTheme.spacing.margin.small}`,
      paddingRight: `${customTheme.spacing.margin.none}`,
    },
  },
  detalles: {
    marginTop: `${customTheme.spacing.margin.big}`,
  },
  rightSide: {
    width: `${customTheme.dimension.width.w50}`,
    flexDirection: 'column',
    marginLeft: `${customTheme.spacing.margin.medium}`,
    marginRight: `${customTheme.spacing.margin.bigger}`,
    [theme.breakpoints.down('sm')]: {
      width: `${customTheme.dimension.width.w90}`,
      marginLeft: `${customTheme.spacing.margin.small}`,
      marginTop: `${customTheme.spacing.margin.small}`,
    },
  },
});
export default BookingRow;
