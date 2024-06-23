import React, { useState } from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Typography from '@mui/material/Typography';
import { useCompanyDetailsStore } from '../store/companyDetailsStore';
import { useInfoStore } from '../store/userInfoStore';
import axios from 'axios';


interface SuccessDialogProps {
    open: boolean;
    onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ open, onClose }) => {

    const { userInfoClear,userInfo } = useInfoStore();
    const { companyInfoClear,companyInfo } = useCompanyDetailsStore();

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');

    const [formData, setFormData] = useState(null);

    const onCloseWindow =() => {
        console.log(userInfo);
        console.log(companyInfo);
        console.log(formData);
        const data = Object.assign({}, userInfo, companyInfo);
        setFormData(data);
        saveFormDataToServer(data);

        
    };
    const saveFormDataToServer = async (data: any) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
            userInfoClear();
            companyInfoClear();
            onClose();
            console.log('Data saved successfully:', response.data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };


    return (
        <Dialog open={open} onClose={onCloseWindow}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            sx={{ textAlign: 'center' }}>
            <DialogTitle>
                <CheckCircleOutlineIcon sx={{ color: 'green', fontSize: 164 }} />
            </DialogTitle>
            <DialogContent>
                <Typography component="h2" variant="h4" color="primary" gutterBottom>
                    Success
                </Typography>
                <Typography component="h2" variant="h5" color="primary" gutterBottom>
                    Your application has been submitted.
                </Typography>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
                <Button onClick={onCloseWindow} variant="contained" color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>

    );
};

export default SuccessDialog;
