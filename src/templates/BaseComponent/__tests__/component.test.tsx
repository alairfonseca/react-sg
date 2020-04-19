import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import <componentName> from '../<componentName>';

describe('<componentName> tests', () => {
    it('renders without crashing', () => {
        const container = render(<<componentName> />);
        expect(container).toBeTruthy();
    });
});