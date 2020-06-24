import { makeStyles } from '@material-ui/styles';
import Image from 'material-ui-image';
import React from 'react';

interface Props {
    urlImage: string;
    loading:boolean;
}

export const PicturePanel = ({ urlImage,loading }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.img}>
            <Image src={urlImage} aspectRatio={(16 / 9)} disableSpinner={loading} />
        </div>
    )
}

const useStyles = makeStyles({
    img: {
        backgroundColor: '#ccc',
    }
});