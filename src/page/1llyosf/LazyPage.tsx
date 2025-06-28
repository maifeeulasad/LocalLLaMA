import React, { lazy, Suspense } from 'react';

const Page1llyosf = lazy(() => import('./Page'));

const LazyPage1llyosf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llyosf />
  </Suspense>
);

export { LazyPage1llyosf };
