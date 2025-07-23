import React, { lazy, Suspense } from 'react';

const Page1m6fvd5 = lazy(() => import('./Page'));

const LazyPage1m6fvd5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6fvd5 />
  </Suspense>
);

export { LazyPage1m6fvd5 };
