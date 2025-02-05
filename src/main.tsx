import '~config/logging';
import '~css/main.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './view/app';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
