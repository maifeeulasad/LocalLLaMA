import React, { lazy, Suspense } from 'react';

const Page1m4t22z = lazy(() => import('./Page'));

const LazyPage1m4t22z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4t22z />
  </Suspense>
);

export { LazyPage1m4t22z };
