import { Middleware } from 'redux';
import { checkPageChange } from './checkPageChange';

const middleware: Middleware[] = [checkPageChange];

export default middleware;
