import React, { lazy, Suspense } from 'react';

const Page1m6uq8q = lazy(() => import('./Page'));

const LazyPage1m6uq8q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6uq8q />
  </Suspense>
);

export { LazyPage1m6uq8q };
