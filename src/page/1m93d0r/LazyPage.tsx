import React, { lazy, Suspense } from 'react';

const Page1m93d0r = lazy(() => import('./Page'));

const LazyPage1m93d0r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m93d0r />
  </Suspense>
);

export { LazyPage1m93d0r };
