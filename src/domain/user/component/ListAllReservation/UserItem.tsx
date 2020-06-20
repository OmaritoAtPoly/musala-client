import React from 'react'
import { makeStyles } from '@material-ui/styles';
import customTheme from '../../../../theme';
import { Avatar, Typography } from '@material-ui/core';

interface Props {
    role: string
    name: string
    email: string
}


const UserItem = ({ role, name, email }: Props) => {
    const getFirtsLetter=name.charAt(0);
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.left}>
            <Avatar className={classes.orange}>{getFirtsLetter}</Avatar>
            </div>
            <div className={classes.informations}>
                <Typography className={classes.role}variant={'body1'} color={'textPrimary'}> {role} </Typography>
                <Typography className={classes.items} variant={'body1'} color={'textPrimary'}> {name} </Typography>
                <Typography className={classes.items} variant={'body1'} color={'textPrimary'}> {email} </Typography>

            </div>
        </div>

    )
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        
    },
    left: {
        marginTop: customTheme.spacing.margin.medium,
        marginRight:customTheme.spacing.margin.small,
    },
    informations:{
     width:"100%"
    },
    items: {
        border: `1px solid ${customTheme.color.grayLight4}`,
        marginBottom:customTheme.spacing.margin.smaller,
        paddingLeft:`${customTheme.spacing.margin.smaller}`
    },
    role:{
        paddingLeft:`${customTheme.spacing.margin.smaller}`
    },
    orange: {
        color: customTheme.color.secondary,
        backgroundColor: customTheme.color.grayLight2,
      },

});



export default UserItem 