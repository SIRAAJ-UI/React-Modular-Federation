import React from 'react';
// import { DevTool } from '@hookform/devtools';

import { styled } from '@mui/system';
import { useForm } from 'react-hook-form';

/** Material UI */
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { useCompanyDetailsStore } from '../store/companyDetailsStore';
import Box from '@mui/material/Box';
/** End Material UI */

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

type FormValues = {
    companyName: string;
    owner: string;
    companyAddress: string;
    city: string;
    zipCode: string;
    country: string;
    email: string;
    phoneNumber: string;
};

interface CompanyDetailsFormProps {
    moveNextStep: (step: number) => void;
};

const CompanyDetailsForm: React.FC<CompanyDetailsFormProps> = ({ moveNextStep }) => {

    const { saveCompayInfo, companyInfo } = useCompanyDetailsStore();
    const defaultValues = companyInfo || {};
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: defaultValues
    });
    const onSubmit = (data: FormValues) => {
        saveCompayInfo(data);
        moveNextStep(2);
    };
    const formFields: Array<{
        id: keyof FormValues;
        label: string;
        required: boolean;
        type: string;
        placeholder: string;
        autoComplete: string;
    }> = [
            { id: "companyName", label: "Company name", required: true, type: "name", placeholder: "John", autoComplete: "first name" },
            { id: "owner", label: "Owner name", required: true, type: "last-name", placeholder: "Snow", autoComplete: "last name" },
            { id: "email", label: "Email", required: true, type: "email", placeholder: "Email", autoComplete: "Email" },
            { id: "phoneNumber", label: "Phone number", required: true, type: "phoneNumber", placeholder: "xxx-xx-xxxx", autoComplete: "S" },
            { id: "country", label: "Country", required: true, type: "country", placeholder: "United States", autoComplete: "Country" }
        ];

    return (
        <>
            <Card sx={{ padding: '20px' }}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
                        {formFields.map(({ id, label, required, type, placeholder, autoComplete }) => (
                            <FormGrid item xs={12} md={(id === "email") ? 12 : 6} key={id}>
                                <FormLabel htmlFor={id} required={required}>
                                    {label}
                                </FormLabel>
                                <OutlinedInput
                                    id={id}
                                    type={type}
                                    placeholder={placeholder}
                                    autoComplete={autoComplete}
                                    error={!!errors[id]?.message}
                                    {...register(id, {
                                        required: required ? `${label} is required.` : false,
                                        minLength: {
                                            value: 2,
                                            message: `${label} must be at least 2 characters long`,
                                        },
                                        ...(id === 'email' && {
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Enter a valid email address',
                                            }
                                        }),
                                        ...(id === 'phoneNumber' && {
                                            pattern: {
                                                value: /^\+?[1-9]\d{1,14}$/,
                                                message: 'Enter a valid phone number',
                                            }
                                        }),
                                        ...(id === 'country' && {
                                            pattern: {
                                                value: /^[A-Za-z\s]+$/,
                                                message: 'Country name should contain only alphabetic characters and spaces',
                                            }
                                        }),
                                    })}
                                />
                                {errors[id]?.message && <FormHelperText id={id}>{errors[id]?.message}</FormHelperText>}
                            </FormGrid>
                        ))}
                        
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" type="submit">Next</Button>
                    </Box>
                </form>
            </Card>
        </>
    );
};

export default CompanyDetailsForm;