import { styled } from '@material-ui/styles';
import { theme } from '../theme';

export default styled('div')({
    maxWidth: '1400px',
    marginRight: '4rem',
    marginLeft: '4rem',
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        marginLeft:"0px",
        marginRight:"0px",
    },
 
});
