import MainLayout from '@/layouts/MainLayout/MainLayout';
import CardCategory from '@/molecules/CardCategory';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { categories } from '../lib/categories';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
            }}
        >
            <Grid item md={12}>
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Box sx={{ width: '100%', height: '400px' }}>
                            <Image
                                src={'/homeImage.gif'}
                                alt={'homeSlider'}
                                layout="fill"
                                objectFit="contain"
                            />
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Grid>
            <Grid container sx={{ display: 'flex' }}>
                <Grid
                    md={12}
                    display={'flex'}
                    justifyContent="center"
                    marginBottom="20px"
                >
                    <Typography variant="h3">Categorias</Typography>
                </Grid>
                {categories.map((catego) => (
                    <Grid
                        item
                        md={2}
                        lg={2}
                        sm={4}
                        xs={6}
                        sx={{
                            display: 'grid',
                            placeItems: 'center',
                            marginBottom: '20px',
                            gap: '20px',
                        }}
                        key={catego.title}
                    >
                        <CardCategory {...catego} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default Home;
