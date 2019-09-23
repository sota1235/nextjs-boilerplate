import * as ReactDOM from 'react-dom';
import { Nav } from '.';

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
