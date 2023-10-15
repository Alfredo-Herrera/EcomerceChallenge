import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from '@mui/material';
import { FC } from 'react';

type ProductDescriptionProps = {
    description: string;
};

const ProductDescription: FC<ProductDescriptionProps> = ({ description }) => {
    return (
        <Box sx={{ minHeight: '200px' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>Descripción del Producto</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">{description}</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default ProductDescription;
