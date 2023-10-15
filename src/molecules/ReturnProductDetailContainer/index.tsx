import AddModeratorIcon from '@mui/icons-material/AddModerator';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Box, Typography } from '@mui/material';

const ReturnProductDetailContainer = () => {
    return (
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
    );
};

export default ReturnProductDetailContainer;
