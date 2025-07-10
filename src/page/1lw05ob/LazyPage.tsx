import React, { lazy, Suspense } from 'react';

const Page1lw05ob = lazy(() => import('./Page'));

const LazyPage1lw05ob = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw05ob />
  </Suspense>
);

export { LazyPage1lw05ob };
