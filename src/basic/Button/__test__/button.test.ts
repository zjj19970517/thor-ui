import { render } from '@testing-library/vue';

import Button from '../src/Button';

test('should work', () => {
  const { getByRole } = render(Button);
  getByRole('button');
});
