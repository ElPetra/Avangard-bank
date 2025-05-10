import { render } from '@testing-library/react';
import { Icon } from './Icon';

jest.mock('../../model', () => ({
    SVG: {
        contactPhone: '/path/to/contactPhone.svg',
    },
}));

describe('Icon', () => {
    test('should render the correct icon based on the icon prop', () => {
        const { container } = render(<Icon icon="contactPhone" />);
        const img = container.querySelectorAll('img')[0];

        expect(img).toHaveAttribute('src', '/path/to/contactPhone.svg');
    });

    test('should apply correct width and height from widthAndHeight prop', () => {
        const { container } = render(
            <Icon icon="contactPhone" widthAndHeight={50} />,
        );
        const img = container.querySelectorAll('img')[0];
        expect(img).toHaveAttribute('width', '50');
        expect(img).toHaveAttribute('height', '50');
    });

    test('should apply different width and height from separate props', () => {
        const { container } = render(
            <Icon icon="contactPhone" width="100" height="200" />,
        );
        const img = container.querySelectorAll('img')[0];
        expect(img).toHaveAttribute('width', '100');
        expect(img).toHaveAttribute('height', '200');
    });

    test('should apply additional className if passed', () => {
        const { container } = render(
            <Icon icon="contactPhone" className="custom-class" />,
        );
        const img = container.querySelectorAll('img')[0];

        expect(img).toHaveClass('custom-class');
    });
});
