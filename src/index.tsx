import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(<h1 className='text-red-900'>Hello React Reload!</h1>);