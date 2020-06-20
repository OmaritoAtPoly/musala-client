import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import Section from '../../../component/Section';

interface Props {
    rankedAds?: JSX.Element[];
    showMore?: boolean;
    title?: string;
    subtitle?: string;
}

export const AdsRow = ({ rankedAds, title, subtitle, showMore = false }: Props) => {
    const classes = useStyles()
    return (
        <Section title={title} description={subtitle}>
            <div className={classes.row} >{
                rankedAds?.map((ad, index: number) => (
                    <div key={index} className={classes.item} >
                        {ad}
                    </div>
                ))
            }
            </div>
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
        }
    })
);
