import React, { lazy, Suspense } from 'react';

const Page1lvz9ic = lazy(() => import('./Page'));

const LazyPage1lvz9ic = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvz9ic />
  </Suspense>
);

export { LazyPage1lvz9ic };
