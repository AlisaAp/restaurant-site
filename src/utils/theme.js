import { createTheme } from '@mui/material/styles';
import { lime } from '@mui/material/colors';

const CustomTheme = createTheme({
  spacing: 1,
  palette: {
    primary: lime,
    white: '#f8f8f8',
  },
});
export default CustomTheme;
