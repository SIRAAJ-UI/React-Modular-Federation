import React, { useState } from 'react';
// import { DevTool } from '@hookform/devtools';
/** Material UI */
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import SuccessDialog from './SuccessDialog';
import Box from '@mui/material/Box';
/** End Material UI */



interface ConfirmationDetailsFormProps {
    moveNextStep: (step: number) => void;
};

const ConfirmationDetailsForm: React.FC<ConfirmationDetailsFormProps> = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const handleButtonClick = () => {
        // Perform some action that triggers success
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <>
            <Card sx={{ padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={handleButtonClick} variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
                <SuccessDialog open={dialogOpen} onClose={handleCloseDialog} />
            </Card>

        </>
    );
};

export default ConfirmationDetailsForm;