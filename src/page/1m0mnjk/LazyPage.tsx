import React, { lazy, Suspense } from 'react';

const Page1m0mnjk = lazy(() => import('./Page'));

const LazyPage1m0mnjk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0mnjk />
  </Suspense>
);

export { LazyPage1m0mnjk };
