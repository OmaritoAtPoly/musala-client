import React from 'react'
import { makeStyles } from '@material-ui/styles';
import customTheme, { theme } from '../../../../theme';
import ItemHouse from './ItemHouse';
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

const BookingRow = ({checkin,checkout,createdAt,email,emailHost,fullName,title,image,host,createAtAdd,widthImage,widthIcon,heightImage,heightIcon}:Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <ItemHouse picture={image} width={widthImage} height={heightImage} title={title} />

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
    boxShadow:"0px 2px 2px 2px #777",
    marginTop: customTheme.spacing.margin.medium,
    '@media (max-width: 768px)': {
      flexDirection: "column",
      marginLeft:`${customTheme.spacing.margin.small}`,
      width: "100%",
      boxShadow:"0px 2px 2px 2px #777",
    
    }
  },
  leftSide: {
    width: "40%",
    flexDirection: "column",
    marginLeft: `${customTheme.spacing.margin.medium}`,
    paddingRight: `${customTheme.spacing.margin.bigger}`,
    '@media (max-width: 768px)': {
      width: "90%",
      marginRight:`${customTheme.spacing.margin.bigger}`,
    }
  },
  detalles: {
    marginTop: `${customTheme.spacing.margin.big}`
  },
  rightSide: {
    width: "40%",
    flexDirection: "column",
    marginLeft: `${customTheme.spacing.margin.medium}`,
    marginRight: `${customTheme.spacing.margin.bigger}`,
    paddingRight: `${customTheme.spacing.margin.bigger}`,
    '@media (max-width: 768px)': {
      width: "90%",
      marginTop: `${customTheme.spacing.margin.small}`,
      marginRight: `${customTheme.spacing.margin.bigger}`
    }
  }
});





export default BookingRow