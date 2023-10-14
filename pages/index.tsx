import MainLayout from '@/layouts/MainLayout/MainLayout';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';

const Home = () => {
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid
                item
                md={4}
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                hola
            </Grid>
            <Grid
                item
                md={4}
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                hola
            </Grid>
        </Grid>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default Home;
