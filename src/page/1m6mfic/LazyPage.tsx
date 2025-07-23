import React, { lazy, Suspense } from 'react';

const Page1m6mfic = lazy(() => import('./Page'));

const LazyPage1m6mfic = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6mfic />
  </Suspense>
);

export { LazyPage1m6mfic };
