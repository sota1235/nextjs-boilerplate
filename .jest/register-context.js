const registerRequireContextHook = require('babel-plugin-require-context-hook/register');
const Enzyme  = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
registerRequireContextHook();