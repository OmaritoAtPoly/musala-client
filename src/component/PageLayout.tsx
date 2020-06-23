import { styled } from '@material-ui/styles';
import customTheme, { theme } from '../theme';

export default styled('div')({
  maxWidth: `${customTheme.dimension.width.wLayout}`,
  marginRight: `${customTheme.spacing.margin.bigger}`,
  marginLeft: `${customTheme.spacing.margin.bigger}`,
  [theme.breakpoints.down('sm')]: {
    width: `${customTheme.dimension.width.w100}`,
    marginLeft: `${customTheme.spacing.margin.none}`,
    marginRight: `${customTheme.spacing.margin.none}`,
  },
});
