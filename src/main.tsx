import { render } from 'preact';
import App from './app';
import './index.css';
import './vars.css';

render(<App />, document.getElementById('app') as HTMLElement);
