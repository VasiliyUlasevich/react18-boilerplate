import React from 'react';
import { createRoot } from 'react-dom/client';

import '../css/index.css';

import App from './app.js';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);