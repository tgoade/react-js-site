import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import HeroSection from './HeroSection';


describe('Test suite for Button component', () => {
    test('to check if the "btn--primary" class is added', () => {
        render(<BrowserRouter><HeroSection /></BrowserRouter>);
        const btnElement = screen.getByRole('button');
        expect(btnElement.classList.contains('btn--primary')).toBe(true);
    });
    test('to check if the "btn--large" class is added', () => {
        render(<BrowserRouter><HeroSection /></BrowserRouter>);
        const btnElement = screen.getByRole('button');
        expect(btnElement.classList.contains('btn--large')).toBe(true);
    });
    test('to check if the href is correct', () => {
        render(<BrowserRouter><HeroSection /></BrowserRouter>);
        const btnElement = screen.getByLabelText(/hero button link/i);
        expect(btnElement).toHaveAttribute('href', '/PlacesToStay');
    });
});