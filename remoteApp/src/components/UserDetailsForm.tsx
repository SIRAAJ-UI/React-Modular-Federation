import React from 'react';
// import { DevTool } from '@hookform/devtools';


import { styled } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useInfoStore } from '../store/userInfoStore';

/** Material UI */
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';

/** End Material UI */

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

type FormValues = {
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    useAddressForPayment: boolean;
};

interface UserDetailsFormProps {
    moveNextStep: (step: number) => void;
};

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ moveNextStep }) => {
    const { save, userInfo } = useInfoStore();

    const defaultValues = userInfo || {};

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: defaultValues
    });

    const onSubmit = (data: FormValues) => {
        save(data);
        moveNextStep(1);
    };

    const formFields: Array<{
        id: keyof FormValues;
        label: string;
        required: boolean;
        type: string;
        placeholder: string;
        autoComplete: string;
    }> = [
        { id: "firstName", label: "First name", required: true, type: "name", placeholder: "John", autoComplete: "first name" },
        { id: "lastName", label: "Last name", required: true, type: "last-name", placeholder: "Snow", autoComplete: "last name" },
        { id: "addressLine1", label: "Address line 1", required: true, type: "address1", placeholder: "Street name and number", autoComplete: "shipping address-line1" },
        { id: "addressLine2", label: "Address line 2", required: false, type: "address2", placeholder: "Apartment, suite, unit, etc. (optional)", autoComplete: "shipping address-line2" },
        { id: "city", label: "City", required: true, type: "city", placeholder: "New York", autoComplete: "City" },
        { id: "state", label: "State", required: true, type: "state", placeholder: "NY", autoComplete: "State" },
        { id: "zipCode", label: "Zip / Postal code", required: true, type: "zip", placeholder: "12345", autoComplete: "shipping postal-code" },
        { id: "country", label: "Country", required: true, type: "country", placeholder: "United States", autoComplete: "shipping country" }
    ];

    return (
        <>
            <Card sx={{ padding: '20px' }}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container spacing={3} sx={{ padding: '20px 20px 20px 0' }}>
                        {formFields.map(({ id, label, required, type, placeholder, autoComplete }) => (
                            <FormGrid item xs={12} md={(id === "addressLine2" || id === "addressLine1") ? 12 : 6} key={id}>
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
                                        ...(id === 'city' && {
                                            pattern: {
                                                value: /^[A-Za-z\s]+$/,
                                                message: 'City name should contain only alphabetic characters',
                                            }
                                        }),
                                        ...(id === 'state' && {
                                            pattern: {
                                                value: /^[A-Za-z\s]+$/,
                                                message: 'State name should contain only alphabetic characters',
                                            }
                                        }),
                                        ...(id === 'zipCode' && {
                                            pattern: {
                                                value: /^\d{5}$/,
                                                message: 'Zip code should contain exactly 5 digits',
                                            }
                                        }),
                                        ...(id === 'country' && {
                                            pattern: {
                                                value: /^[A-Za-z\s]+$/,
                                                message: 'Country name should contain only alphabetic characters and spaces',
                                            }
                                        })
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


export default UserDetailsForm;