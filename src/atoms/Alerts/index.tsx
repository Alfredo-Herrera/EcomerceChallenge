import Alert, { AlertColor } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setError } from '../../../redux/actions/shopping';

const Alerts: FC<{
    title: string;
    severityError: AlertColor | undefined;
    // eslint-disable-next-line react/function-component-definition
}> = ({ title, severityError }) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        // funcion para eliminar la notificacion
        dispatch(setError({ title: '', severityError: 'success' }));
    };
    // si no trae title retorna un fragment
    if (!title) return <> </>;
    return (
        <Stack sx={{ width: '100%', margin: ' 0px 0px 20px 0 ' }} spacing={2}>
            <Alert severity={severityError} onClose={handleClose}>
                {title}
            </Alert>
        </Stack>
    );
};

export default Alerts;
