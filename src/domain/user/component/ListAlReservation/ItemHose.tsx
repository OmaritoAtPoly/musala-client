import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import React from 'react'
import logo from '../../../../logo.svg'
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import customTheme from '../../../../theme';

interface Props {
  picture: string
  title: string
  width: number
  height: number

}
const ItemHose = ({ picture, title, height, width }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
     <div> <img src={picture} width={width} height={height} alt="photo"/></div>
      <div className={classes.description}><Typography  variant={'body1'} color={'textPrimary'} > {title} </Typography></div>
    </div>
  )
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    width:"100%",
    flexDirection: "row",

  },
  description: {
    marginTop: `${customTheme.spacing.margin.smaller}`,
    border: `1px solid ${customTheme.color.grayLight4}`,
    marginLeft:`${customTheme.spacing.margin.medium}`,
    borderRadius: '1px',
    paddingLeft:`${customTheme.spacing.margin.medium}`,
    width:"100%"
    
  }
});



export default ItemHose 
