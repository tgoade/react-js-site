import {render, screen} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';

describe('Test suit for navigation components', () => {
    test('Check if text appears on screen', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const navElement = screen.getByText(/places to stay/i);
        expect(navElement).toBeInTheDocument();
    });
});