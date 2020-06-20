import React from 'react'
import { makeStyles } from '@material-ui/styles';
import customTheme, { theme } from '../../../../theme';
import ItemHose from './ItemHose';
import ItemDescriptions from './ItemDescriptions';
import ItemDate from './ItemDate';
import UserItem from './UserItem'



export interface Props {
  checkin: string
  checkout: string
  createdAt: string
  email: string
  emailHost:string
  fullName: string
  title: string
  image: string
  host: string
  createAtAdd:string 
  widthImage:number
  heightImage:number
  widthIcon:number
  heightIcon:number
}

const ItemReservation = ({checkin,checkout,createdAt,email,emailHost,fullName,title,image,host,createAtAdd,widthImage,widthIcon,heightImage,heightIcon}:Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <ItemHose picture={image} width={widthImage} height={heightImage} title={title} />

        <div className={classes.detalles}>
          <ItemDate checkin={checkin} checkout={checkout} width={widthIcon} height={heightIcon} />
          <ItemDescriptions description={"Creado el "} date={createAtAdd} />
          <ItemDescriptions description={"Reservado el"} date={createdAt} />
        </div>
      </div>
      <div className={classes.rightSide}>
        <UserItem email={email} name={fullName} role={"Client"} />
        <UserItem email={emailHost} name={host} role={"Host"} />
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    minwidth: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: '1px',
    marginTop: customTheme.spacing.margin.medium,
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      width: "100%"
    }
  },
  leftSide: {
    width: "40%",
    flexDirection: "column",
    marginLeft: `${customTheme.spacing.margin.medium}`,
    paddingRight: `${customTheme.spacing.margin.bigger}`,
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      marginRight: `${customTheme.spacing.margin.bigger}`
    },
  },
  detalles: {
    marginTop: `${customTheme.spacing.margin.big}`
  },
  rightSide: {
    width: "40%",
    flexDirection: "column",
    marginLeft: `${customTheme.spacing.margin.big}`,
    marginRight: `${customTheme.spacing.margin.bigger}`,
    paddingRight: `${customTheme.spacing.margin.bigger}`,
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      marginTop: `${customTheme.spacing.margin.small}`,
      marginRight: `${customTheme.spacing.margin.bigger}`
    },
  }
});





export default ItemReservation