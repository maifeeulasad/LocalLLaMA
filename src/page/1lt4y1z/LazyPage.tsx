import React, { lazy, Suspense } from 'react';

const Page1lt4y1z = lazy(() => import('./Page'));

const LazyPage1lt4y1z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt4y1z />
  </Suspense>
);

export { LazyPage1lt4y1z };
