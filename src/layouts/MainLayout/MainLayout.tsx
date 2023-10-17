import Alerts from '@/atoms/Alerts';
import NavBar from '@/organisms/Navbar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Head from 'next/head';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { main } from '../../../redux/reducers/shopping';

export interface mainInterface {
    children: React.ReactElement | React.ReactNode;
    title: string;
}
// eslint-disable-next-line react/function-component-definition
const MainLayout: FC<mainInterface> = ({ children, title }) => {
    const { loading, error } = useSelector((state: main) => state.main);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Alfredo Herrera" />
                <meta
                    name="description"
                    content="Informacion sobre el contacto"
                />
                <meta name="keywords" content={`${title},`} />
            </Head>

            <main>
                <Grid container>
                    <Grid item md={12}>
                        <NavBar />
                    </Grid>
                    <Toolbar sx={{ marginBottom: '30px' }} />
                    <Alerts {...error} />
                    {children}
                    <Backdrop
                        sx={{
                            color: '#fff',
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={loading}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Grid>
            </main>
        </>
    );
};

export default MainLayout;
