import React, { lazy, Suspense } from 'react';

const Page1lnqaea = lazy(() => import('./Page'));

const LazyPage1lnqaea = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnqaea />
  </Suspense>
);

export { LazyPage1lnqaea };
