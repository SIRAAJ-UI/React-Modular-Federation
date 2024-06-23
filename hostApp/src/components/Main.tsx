import React from 'react';
import { RenderSwitchComponent } from './RenderSwitch';
import Typography from '@mui/material/Typography';

let MainForm: React.FC = () => {
    return (
        <>
            <Typography component="h2" variant="h4" align="center" color="primary" gutterBottom>
                Registration Form
            </Typography>
            <RenderSwitchComponent></RenderSwitchComponent>
        </>
    )
}

export default MainForm;