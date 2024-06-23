
import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';

import ConfirmationDetailsForm from 'home/ConfirmationDetailsForm';
import UserDetailsForm from 'home/UserDetailsForm';
import CompanyDetailsForm from 'home/CompanyDetailsForm'


export const RenderSwitchComponent = () => {

    const [steps, updateSteps] = useState(0);
    const moveNextStep = (stepNumber: any) => {
        updateSteps(stepNumber);
    };
    const renderSwitch = (stepNumber: number) => {
        switch (stepNumber) {
            case 0:
                return <UserDetailsForm moveNextStep={moveNextStep} />
            case 1:
                return <CompanyDetailsForm moveNextStep={moveNextStep} />
            case 2:
                return <ConfirmationDetailsForm moveNextStep={moveNextStep} />
        }
    };

    const setGoSteps = (stepNumber: number) => {
        updateSteps(stepNumber);
    }

    return (
        <>
            <Stepper activeStep={steps}>
                <Step onClick={() => setGoSteps(0)} label="step 1" />
                <Step onClick={() => setGoSteps(1)} label="step 2" />
                <Step onClick={() => setGoSteps(2)} label="step 3" />
            </Stepper>
            {renderSwitch(steps)}
        </>
    )
}

