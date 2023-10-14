import { createTheme } from '@mui/material/styles';
import palette from './palette';

const theme = createTheme({
    palette: palette.light,
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1024,
            lg: 1200,
            xl: 1200,
        },
    },
});

theme.typography.h1 = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '69px',
    lineHeight: '84px',
    letterSpacing: '-0.01em',
    // [theme.breakpoints.up('sm')]: {
    //     fontSize: '64px',
    //     lineHeight: '80px',
    //     letterSpacing: '-0.02em',
    // },
    // [theme.breakpoints.up('md')]: {
    //     fontSize: '64px',
    //     lineHeight: '80px',
    //     letterSpacing: '-0.02em',
    // },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '64px',
    //     lineHeight: '80px',
    //     letterSpacing: '-0.02em',
    // },
};

theme.typography.h2 = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '55px',
    lineHeight: '67px',
    letterSpacing: '-0.01em',
    // [theme.breakpoints.up('sm')]: {
    //     fontSize: '48px',
    //     lineHeight: '60px',
    // },
    // [theme.breakpoints.up('md')]: {
    //     fontSize: '56px',
    //     lineHeight: '72px',
    // },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '64px',
    //     lineHeight: '80px',
    // },
};

theme.typography.h3 = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '44px',
    lineHeight: '53px',
    letterSpacing: '-0.01em',
    // [theme.breakpoints.up('sm')]: {
    //     fontSize: '48px',
    //     lineHeight: '60px',
    // },
    // [theme.breakpoints.up('md')]: {
    //     fontSize: '56px',
    //     lineHeight: '72px',
    // },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '64px',
    //     lineHeight: '80px',
    // },
};

theme.typography.h4 = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '36px',
    lineHeight: '44px',
    letterSpacing: '-0.01em',
    // [theme.breakpoints.up('sm')]: {
    //     fontSize: '48px',
    //     lineHeight: '60px',
    // },
    // [theme.breakpoints.up('md')]: {
    //     fontSize: '56px',
    //     lineHeight: '72px',
    // },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '64px',
    //     lineHeight: '80px',
    // },
};

theme.typography.h5 = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: '-0.01em',
    // [theme.breakpoints.up('sm')]: {
    //     fontSize: '48px',
    //     lineHeight: '60px',
    // },
    // [theme.breakpoints.up('md')]: {
    //     fontSize: '56px',
    //     lineHeight: '72px',
    // },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '64px',
    //     lineHeight: '80px',
    // },
};

theme.typography.body1 = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '-0.01em',
    // [theme.breakpoints.up('sm')]: {
    //     fontSize: '48px',
    //     lineHeight: '60px',
    // },
    // [theme.breakpoints.up('md')]: {
    //     fontSize: '56px',
    //     lineHeight: '72px',
    // },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '64px',
    //     lineHeight: '80px',
    // },
};

theme.typography.button = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17px',
    letterSpacing: '-0.01em',
    // [theme.breakpoints.up('sm')]: {
    //     fontSize: '24px',
    //     lineHeight: '32px',
    //     textAlign: 'center',
    // },
    // [theme.breakpoints.up('md')]: {
    //     fontSize: '24px',
    //     lineHeight: '32px',
    //     textAlign: 'center',
    // },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '24px',
    //     lineHeight: '32px',
    //     textAlign: 'center',
    // },
};

theme.typography.caption = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '15px',
    letterSpacing: '-0.01em',
    // [theme.breakpoints.up('sm')]: {
    //     fontSize: '14px',
    //     lineHeight: '24px',
    //     textAlign: 'center',
    // },
    // [theme.breakpoints.up('md')]: {
    //     fontSize: '14px',
    //     lineHeight: '24px',
    //     textAlign: 'center',
    // },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '14px',
    //     lineHeight: '24px',
    //     textAlign: 'center',
    // },
};

export default theme;
