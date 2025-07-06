import React, { lazy, Suspense } from 'react';

const Page1lsfmcj = lazy(() => import('./Page'));

const LazyPage1lsfmcj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsfmcj />
  </Suspense>
);

export { LazyPage1lsfmcj };
