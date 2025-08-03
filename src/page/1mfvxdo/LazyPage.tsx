import React, { lazy, Suspense } from 'react';

const Page1mfvxdo = lazy(() => import('./Page'));

const LazyPage1mfvxdo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfvxdo />
  </Suspense>
);

export { LazyPage1mfvxdo };
