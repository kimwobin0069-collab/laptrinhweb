import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { SeasonProvider } from './seasonal/SeasonProvider';
import './seasonal/seasonal.css';
import './seasonal/lessonDecorations.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SeasonProvider><App /></SeasonProvider>
  </React.StrictMode>
);
