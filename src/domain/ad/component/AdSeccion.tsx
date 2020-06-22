import { CircularProgress, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import Section from '../../../component/Section';
import customTheme from '../../../theme';

interface Props {
    rankedAds?: JSX.Element[];
    showMore?: boolean;
    title?: string;
    subtitle?: string;
    loading: boolean;
}

export const AdSeccions = ({ rankedAds, title, subtitle, showMore = false, loading }: Props) => {
    const classes = useStyles()

    return (
        <Section title={title} description={subtitle}>
            <>
                <div className={classes.loading}>{(loading) && <CircularProgress size={20} />}</div>
                <div className={classes.row} >{
                    rankedAds?.map((ad, index: number) => (
                        <div key={index} className={classes.item} >
                            {ad}
                        </div>
                    ))
                }
                </div>
            </>
        </Section>
    )
};

const useStyles = makeStyles(() =>
    createStyles({
        row: {
            display: 'flex',
        },
        item: {
            flex: 1,
            paddingRight: '1rem',

            '&:last-child': {
                paddingRight: 0,
            }
        },
        loading: {
            color: customTheme.color.primary,
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
        }
    })
);
