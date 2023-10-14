import MainLayout from '@/layouts/MainLayout/MainLayout';
import GalaxyCardDemo from '@/molecules/Card';
import Grid from '@mui/material/Grid';
import { ReactElement, useEffect } from 'react';
import ApiChupaPrecios from '../lib/apiChupaPrecios';

const Home = ({ token }) => {
    useEffect(() => {
        newData();
    }, []);

    const newData = async () => {
        console.log(
            '🚀 ~ file: index.tsx:44 ~ getServerSideProps ~ data:',
            token
        );
        const { data } = await ApiChupaPrecios.get(
            `chupaprecios/customcatalog/?search=gato&selected_store=amazon&page_num=1`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                },
                responseType: 'json',
            }
        );
        console.log(
            '🚀 ~ file: index.tsx:44 ~ getServerSideProps ~ data:',
            data
        );
    };

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
                <GalaxyCardDemo />
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

export const getServerSideProps = async () => {
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

        return {
            props: {
                token: token,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default Home;
