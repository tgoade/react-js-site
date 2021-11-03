import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';

describe('Test suit for navigation components', () => {
    test('to check if text appears on screen', () => {
        // Arrange
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        // Act
        // (nothing)
        // Assert
        const navElement = screen.getByText(/places to stay/i);
        expect(navElement).toBeInTheDocument();
    });

    test('to check if "Check In" appears if "Places to Stay" button is clicked', () => {
        // Arrange
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        // Act
        const placesElememt = screen.getByText(/places to stay/i);
        userEvent.click(placesElememt);
        // Assert
        const placesOutput = screen.getByText(/check in/i);
        expect(placesOutput).toBeInTheDocument();
    });

    test('to check if "Guests" appears if "Experiences" button is clicked', () => {
        // Arrange
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        // Act
        const experiencesElememt = screen.getByText(/experiences/i);
        userEvent.click(experiencesElememt);
        // Assert
        const experiencesOutput = screen.getByText(/guests/i);
        expect(experiencesOutput).toBeInTheDocument();
    });

    test('to check if "Check In" does not appears if "Experiences" button is clicked', () => {
        // Arrange
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        // Act
        const experiencesElememt = screen.getByText(/experiences/i);
        userEvent.click(experiencesElememt);
        // Assert
        const experiencesOutput = screen.queryByText(/check in/i);
        expect(experiencesOutput).toBeNull();
    });
});