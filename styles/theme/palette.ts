import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema =
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';

const light = {
    primary: {
        lighter: '#FFA9A1',
        light: '#FF7645',
        main: '#FF2E01',
        dark: '#CC2400',
        darker: '#991D00',
    },
    secondary: {
        lighter: '#FFC5A5', // Un tono más claro
        light: '#FF9C75', // Un tono más claro
        main: '#FFAB92', // Mismo color primario
        dark: '#CC2400', // 20% más oscuro
        darker: '#991D00', // 30% más oscuro
    },
    success: {
        lighter: '#D6FFB9', // 20% más claro
        light: '#A7FF78', // 10% más claro
        main: '#64ED36', // Mismo color primario
        dark: '#3BBA1B', // 20% más oscuro
        darker: '#216D0D', // 30% más oscuro
    },
    info: {
        lighter: '#D6FFED', // 20% más claro
        light: '#78FBFD', // 10% más claro
        main: '#20D5F9', // Mismo color primario
        dark: '#107FB3', // 20% más oscuro
        darker: '#064177', // 30% más oscuro
    },
    warning: {
        lighter: '#FFE1A6', // 20% más claro
        light: '#FDE283', // 10% más claro
        main: '#F9C131', // Mismo color primario
        dark: '#B37F18', // 20% más oscuro
        darker: '#774B09', // 30% más oscuro
    },
    error: {
        lighter: '#FFD1C8', // 20% más claro
        light: '#FEA47F', // 10% más claro
        main: '#FC462A', // Mismo color primario
        dark: '#B51519', // 20% más oscuro
        darker: '#78081C', // 30% más oscuro
    },
};

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
    500_8: alpha('#919EAB', 0.08),
    500_12: alpha('#919EAB', 0.12),
    500_16: alpha('#919EAB', 0.16),
    500_24: alpha('#919EAB', 0.24),
    500_32: alpha('#919EAB', 0.32),
    500_48: alpha('#919EAB', 0.48),
    500_56: alpha('#919EAB', 0.56),
    500_80: alpha('#919EAB', 0.8),
};

const GRADIENTS_LIGTH = {
    primary: createGradient(light.primary.light, light.primary.main),
    info: createGradient(light.info.light, light.info.main),
    success: createGradient(light.success.light, light.success.main),
    warning: createGradient(light.warning.light, light.warning.main),
    error: createGradient(light.error.light, light.error.main),
};

const CHART_COLORS = {
    violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
    blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
    green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
    yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
    red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON_LIGTH = {
    common: { black: '#000', white: '#fff' },
    primary: { ...light.primary, contrastText: '#fff' },
    secondary: { ...light.secondary, contrastText: '#fff' },
    info: { ...light.info, contrastText: '#fff' },
    success: { ...light.success, contrastText: GREY[800] },
    warning: { ...light.warning, contrastText: GREY[800] },
    error: { ...light.error, contrastText: '#fff' },
    grey: GREY,
    gradients: GRADIENTS_LIGTH,
    chart: CHART_COLORS,
    divider: GREY[500_24],
    action: {
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

const palette = {
    light: {
        ...COMMON_LIGTH,
        mode: 'light',
        text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
        background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
        action: { active: GREY[600], ...COMMON_LIGTH.action },
    },
} as const;

export default palette;
