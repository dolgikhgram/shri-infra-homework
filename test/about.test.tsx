import React from 'react';
import { render } from '@testing-library/react';
import { About } from '../src/client/pages/About';

describe('About', () => {
    it('Should render author name', () => {
        const { container } = render(<About />);

        // Намеренно ломаем тест для проверки защиты ветки
        expect(container.textContent).toBe('AboutAuthor: Nikita Dolgikh');
    });
});
