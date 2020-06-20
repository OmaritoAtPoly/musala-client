import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import React from 'react'
import { makeStyles } from '@material-ui/styles';
import customTheme from '../../../../theme';
import Checkin from '../../../../assets/img/CheckIn'
import CheckOut from '../../../../assets/img/CheckOut'

interface Props {
  checkin:string
  checkout:string
  width:number
  height:number
}


const ItemDate = ({checkin,checkout,width,height}:Props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
              <div className={classes.left}><Checkin  width={width} height={height}/>{checkin}</div>
              <div className={classes.right}><CheckOut width={width} height={height}/>{checkout}</div>
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        border: `1px solid ${customTheme.color.grayLight4}`,
        borderRadius: '1px'
    },
    left:{
        paddingLeft:`${customTheme.spacing.margin.smaller}`
    },
    right:{
        paddingRight:`${customTheme.spacing.margin.smaller}`
    }

});



export default ItemDate 