import { render, screen } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import { Input } from './Input';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Input component', () => {
    test('renders without crashing', () => {
        render(<Input />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    test('renders with correct placeholder', () => {
        render(<Input placeholder="Enter your name" />);
        const inputElement = screen.getByPlaceholderText('Enter your name');
        expect(inputElement).toBeInTheDocument();
    });

    test('renders with correct placeholder', () => {
        render(<Input placeholder="Enter your name" />);
        const inputElement = screen.getByPlaceholderText('Enter your name');
        expect(inputElement).toBeInTheDocument();
    });

    test('supports additional attributes', () => {
        render(<Input type="text" id="test-input" className="custom-class" />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveAttribute('type', 'text');
        expect(inputElement).toHaveAttribute('id', 'test-input');
        expect(inputElement).toHaveClass('custom-class');
    });

    test('supports additional attributes', () => {
        render(<Input className="my-custom-class" />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveClass('my-custom-class');
    });
});
