import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Test suite for the Home page', () => {
    test('to check if "Destination Type" appears on page', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        const destinationBlock = screen.getByText('Destination Type', { exact: false });
        expect(destinationBlock).toBeInTheDocument();
    });
});