import Grid, { GridSize } from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useMemo } from 'react';
import customTheme from '../theme';
import { Typography, CircularProgress } from '@material-ui/core';

interface Props {
  count: GridSize;
  items: any[];
  renderItem: (data: any) => JSX.Element;
  title: string;
  description: string;
  loading?: boolean;
}

const Session = ({
  loading = false,
  title,
  description,
  count,
  items,
  renderItem,
}: Props) => {
  const classes = useStyles();
  const { xs, sm } = useMemo(() => {
    let xs, sm;
    switch (count) {
      case 1:
        xs = sm = 12;
        break;
      case 2:
        xs = 12;
        sm = 6;
        break;
      case 3:
        xs = 12;
        sm = 4;
        break;
      default:
        xs = 12;
        sm = 3;
        break;
    }
    return { xs, sm } as { xs: GridSize; sm: GridSize };
  }, [count]);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.subTitle}>{description}</Typography>
      <Grid container xs={12} spacing={3} className={classes.container}>
        {loading && <CircularProgress size={20} />}
        {items.map((element) => (
          <Grid item xs={xs} sm={sm}>
            {renderItem(element)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      margin: customTheme.spacing.margin.none,
    },
    title: {
      color: customTheme.color.foreground,
      fontWeight: 'bold',
      marginBottom: '0.1rem',
    },
    subTitle: {
      color: customTheme.color.foreground,
      marginBottom: '1rem',
    },
  }),
);

export default Session;
