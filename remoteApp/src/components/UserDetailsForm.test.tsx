import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useInfoStore } from '../store/userInfoStore';
import UserDetailsForm from './UserDetailsForm';

jest.mock('../store/userInfoStore');

const mockedUseInfoStore = useInfoStore as jest.MockedFunction<typeof useInfoStore>;

describe('UserDetailsForm', () => {
    const moveNextStep = jest.fn();
    const increment = jest.fn();
    const save = jest.fn();

    beforeEach(() => {
        mockedUseInfoStore.mockReturnValue({
            save,
            userInfo: {}
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the form correctly', () => {
        render(<UserDetailsForm moveNextStep={moveNextStep} />);
        expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Address line 1/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Zip \/ Postal code/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
    });

    it('shows validation errors when form is submitted with empty required fields', async () => {
        render(<UserDetailsForm moveNextStep={moveNextStep} />);
        fireEvent.click(screen.getByRole('button', { name: /Next/i }));
        expect(await screen.findByText(/Firstname is required./i)).toBeInTheDocument();
        expect(await screen.findByText(/Lastname is required./i)).toBeInTheDocument();
        expect(await screen.findByText(/Address is required./i)).toBeInTheDocument();
        expect(await screen.findByText(/City is required./i)).toBeInTheDocument();
        expect(await screen.findByText(/State is required./i)).toBeInTheDocument();
        expect(await screen.findByText(/Zip is required./i)).toBeInTheDocument();
        expect(await screen.findByText(/Country is required./i)).toBeInTheDocument();
    });

    it('calls save and moveNextStep when form is submitted with valid data', async () => {
        render(<UserDetailsForm moveNextStep={moveNextStep} />);
        
        fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText(/Address line 1/i), { target: { value: '123 Main St' } });
        fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'New York' } });
        fireEvent.change(screen.getByLabelText(/State/i), { target: { value: 'NY' } });
        fireEvent.change(screen.getByLabelText(/Zip \/ Postal code/i), { target: { value: '10001' } });
        fireEvent.change(screen.getByLabelText(/Country/i), { target: { value: 'United States' } });
        
        fireEvent.click(screen.getByRole('button', { name: /Next/i }));
        
        expect(save).toHaveBeenCalled();
        expect(moveNextStep).toHaveBeenCalledWith(1);
        expect(increment).toHaveBeenCalledTimes(2);
    });
    
});
