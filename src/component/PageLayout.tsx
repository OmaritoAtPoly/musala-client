import { styled } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import customTheme from '../theme';

export default styled('div')(({ theme }: { theme: Theme }) => ({
  maxWidth: '1400px',
  marginRight: customTheme.spacing.margin.bigger,
  marginLeft: customTheme.spacing.margin.bigger,
  [theme.breakpoints.down('xs')]: {
    marginRight: customTheme.spacing.margin.none,
    marginLeft: customTheme.spacing.margin.none,
  },
}));
