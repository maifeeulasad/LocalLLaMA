import React, { lazy, Suspense } from 'react';

const Page1lpr5dj = lazy(() => import('./Page'));

const LazyPage1lpr5dj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpr5dj />
  </Suspense>
);

export { LazyPage1lpr5dj };
