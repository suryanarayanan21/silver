import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { App } from './components/App';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(<App />);