import { ContainerInfo } from '@/atoms/ContainerInfo/styles';
import PaymentMethods from '@/atoms/PaymentMethods';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { ProductDetailType } from '@/types/details';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import ApiChupaPrecios from '../../lib/apiChupaPrecios';
import { NextPageWithLayout } from '../_app';

type productDatailProps = {
    dataProduct: ProductDetailType;
};

const currencies = [
    {
        value: '1',
        label: '1 unidad',
    },
    {
        value: '2',
        label: '2 unidades',
    },
    {
        value: '3',
        label: '3 unidades',
    },
    {
        value: '4',
        label: '4 unidades',
    },
];

const ProductDetail: NextPageWithLayout<productDatailProps> = ({
    dataProduct,
}) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    console.log('🚀 ~ file: [id].tsx:16 ~ items:', dataProduct);
    return (
        <Paper elevation={6} sx={{ margin: '0px 30px 30px 30px' }}>
            <Grid container>
                <Grid item md={9}>
                    <Grid container>
                        <Grid item md={6} padding={'30px'}>
                            <Image
                                src={dataProduct.main_image.link}
                                alt={dataProduct.title}
                                width={378}
                                height={468}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            padding="20px"
                            display="flex"
                            gap="15px"
                            flexDirection="column"
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '22px',
                                    lineHeight: 1.18,
                                    marginTop: '5px',
                                }}
                            >
                                {dataProduct.title}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '5px' }}>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'rgba(0,0,0,.55);' }}
                                >
                                    {dataProduct.reviews.rating}
                                </Typography>
                                <Box>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarBorderIcon />
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'rgba(0,0,0,.55);' }}
                                >
                                    ({dataProduct.reviews.total_reviews})
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <Typography variant="body2">
                                    {`Estado: `}
                                    <span style={{ color: '#00a650' }}>
                                        En Stock
                                    </span>
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{ color: 'rgba(0,0,0,.55);' }}
                                >
                                    {`SKU: ${dataProduct.asin}`}
                                </Typography>
                            </Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: '36px',
                                    fontWeight: '300',
                                    marginTop: '5px',
                                    lineHeight: '1',
                                }}
                            >
                                ${dataProduct.price} MX
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: '20px',
                                    fontWeight: '300',
                                    marginTop: '5px',
                                    lineHeight: '1',
                                }}
                            >
                                IVA incluido
                            </Typography>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100px',
                                    position: 'relative',
                                }}
                            >
                                <PaymentMethods />
                            </Box>

                            <Box sx={{ minHeight: '200px' }}>
                                <Accordion
                                    expanded={expanded === 'panel1'}
                                    onChange={handleChange('panel1')}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography>
                                            Descripción del Producto
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body1">
                                            {dataProduct.description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} padding={'20px'}>
                    <ContainerInfo>
                        <Box>
                            <Typography variant="body2">
                                <span style={{ color: '#00a650' }}>
                                    Envio Gratis
                                </span>{' '}
                                a todo el país
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
                                Vendido por{' '}
                                <span style={{ color: '#3483fa' }}>Amazon</span>
                            </Typography>
                            <Typography variant="body2">
                                Url:{' '}
                                <a
                                    style={{ color: '#3483fa' }}
                                    href={dataProduct.url}
                                >
                                    Link
                                </a>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="body2">Cantidad:</Typography>
                            <TextField
                                id="filled-select-currency"
                                select
                                defaultValue="1"
                                variant="standard"
                            >
                                {currencies.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        <Typography variant="body2">
                                            {option.label}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Typography variant="body2">
                                (6 dispo...)
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginTop: '20px',
                            }}
                        >
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<SellIcon />}
                                sx={{ height: 40 }}
                            >
                                Comprar ahora
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<LocalGroceryStoreIcon />}
                                sx={{ height: 40 }}
                            >
                                Agregar al Carrito
                            </Button>
                        </Box>
                        <Box>
                            <Box>
                                <Typography variant="body2">
                                    <KeyboardReturnIcon />
                                    <span
                                        style={{
                                            color: '#3483fa',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        Devolución Gratis
                                    </span>
                                </Typography>
                                <Typography variant="body2">
                                    Tienes 30 días desde que lo recibes
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="body2">
                                    <AddModeratorIcon />
                                    <span
                                        style={{
                                            color: '#3483fa',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        Compra Protegida
                                    </span>
                                </Typography>
                                <Typography variant="body2">
                                    Tienes 30 días desde que lo recibes
                                </Typography>
                            </Box>
                        </Box>
                    </ContainerInfo>
                </Grid>
            </Grid>
        </Paper>
    );
};

export const getServerSideProps = async (context: any) => {
    const { query } = context;
    try {
        const { data: token } = await ApiChupaPrecios.post(
            `integration/admin/token`,
            {
                username:
                    process.env.USER_NAME || process.env.NEXT_PUBLIC_USER_NAME,
                password:
                    process.env.USER_PASS || process.env.NEXT_PUBLIC_USER_PASS,
            }
        );
        const { data } = await ApiChupaPrecios.get(
            `chupaprecios/productdetail/?asin=${query.id}&selectedStore=amazon`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                },
                responseType: 'json',
            }
        );
        console.log(
            '🚀 ~ file: [id].tsx:51 ~ getServerSideProps ~ data:',
            data
        );

        return {
            props: {
                dataProduct: data[0].data.item,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

ProductDetail.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Categoria">{page}</MainLayout>;
};

export default ProductDetail;
