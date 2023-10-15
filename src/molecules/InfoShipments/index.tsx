import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type InfoShipmentsProps = {
    url: string;
};

const InfoShipments: FC<InfoShipmentsProps> = ({ url }) => {
    return (
        <>
            <Box>
                <Typography variant="body2">
                    <span style={{ color: '#00a650' }}>Envio Gratis</span> a
                    todo el país
                </Typography>
                <Typography variant="body2">
                    Conoce los tiempos y las formas de envío.
                </Typography>
                <a style={{ color: '#3483fa' }} href="#">
                    Calcular cuando llega
                </a>
            </Box>
            <Box>
                <Typography variant="body2">
                    Vendido por <span style={{ color: '#3483fa' }}>Amazon</span>
                </Typography>
                <Typography variant="body2">
                    Url:{' '}
                    <a style={{ color: '#3483fa' }} href={url}>
                        Link
                    </a>
                </Typography>
            </Box>
        </>
    );
};

export default InfoShipments;
