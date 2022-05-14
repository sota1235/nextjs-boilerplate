import { Middleware } from '@reduxjs/toolkit';
import { checkPageChange } from './checkPageChange';

const middleware: Middleware[] = [checkPageChange];

export default middleware;
