import { render } from '@testing-library/react';
import { Image } from './Image';

jest.mock('../../model', () => ({
    PNG: {
        phone: '/path/to/phonePNG',
    },
}));

describe('Image', () => {
    test('should render the correct image based on the icon prop', () => {
        const { container } = render(<Image image="phone" />);
        const img = container.getElementsByTagName('img')[0];

        expect(img).toHaveAttribute('src', '/path/to/phonePNG');
    });

    test('should apply correct width and height from widthAndHeight prop', () => {
        const { container } = render(
            <Image image="phone" widthAndHeight={100} />,
        );
        const img = container.getElementsByTagName('img')[0];

        expect(img).toHaveAttribute('width', '100');
        expect(img).toHaveAttribute('height', '100');
    });

    test('should apply additional className if passed', () => {
        const { container } = render(
            <Image image="phone" className="custom-class" />,
        );
        const img = container.getElementsByTagName('img')[0];

        expect(img).toHaveClass('custom-class');
    });
});
