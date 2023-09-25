import { Button } from './Button';

import { render } from '@testing-library/react';

test('renders learn react link', () => {
    const { asFragment } = render(<Button variant="danger" label="Klick" />);
    expect(asFragment()).toMatchSnapshot();
});