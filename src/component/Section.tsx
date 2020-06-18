import { Typography } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles';
import React from 'react';
import theme from '../theme';

interface Props {
    title?: string | JSX.Element;
    description?: string | JSX.Element;
    children?: JSX.Element;
}

const SectionWrapp = styled('section')({
    marginTop: '3.2rem',
    marginBottom: '3.2rem'
});

export const Section = ({ title, description, children }: Props) => {
    const classes = useStyles();
    return (
        <SectionWrapp>
            <Typography variant="h3" className={classes.title}>
                {title}
            </Typography>
            <Typography className={classes.subTitle}>{description}</Typography>
            {children}
        </SectionWrapp>
    );
};

export default Section;

const useStyles = makeStyles(() => ({
    title: {
        color: theme.color.foreground,
        fontWeight: 'bold',
        marginBottom: '0.1rem'
    },
    subTitle: {
        color: theme.color.foreground,
        marginBottom: '1rem'
    }
}));
