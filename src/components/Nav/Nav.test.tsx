import { Nav } from '.';
import { createRoot } from 'react-dom/client';

it('should render without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Nav />);
  root.unmount();
});
