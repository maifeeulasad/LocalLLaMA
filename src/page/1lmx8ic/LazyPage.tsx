import React, { lazy, Suspense } from 'react';

const Page1lmx8ic = lazy(() => import('./Page'));

const LazyPage1lmx8ic = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmx8ic />
  </Suspense>
);

export { LazyPage1lmx8ic };
