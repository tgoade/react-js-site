import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import SmallCards from './SmallCards';

describe('Test suit for Destination Type section', () => {
    test('if the Beaches href is correct', () => {
        render(<BrowserRouter><SmallCards /></BrowserRouter>);
        const beachesLink = screen.getByLabelText(/beaches link/i);
        expect(beachesLink).toHaveAttribute('href', '/beaches');
    });
});