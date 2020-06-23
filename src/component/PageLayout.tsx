import { styled } from '@material-ui/styles';
import customTheme, { theme } from '../theme';

export default styled('div')({
  maxWidth: '1400px',
  marginRight: '4rem',
  marginLeft: '4rem',
  [theme.breakpoints.down('sm')]: {
    width: `${customTheme.dimension.width.w100}`,
    marginLeft: `${customTheme.spacing.margin.none}`,
    marginRight: `${customTheme.spacing.margin.none}`,
  },
});
