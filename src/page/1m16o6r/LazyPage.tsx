import React, { lazy, Suspense } from 'react';

const Page1m16o6r = lazy(() => import('./Page'));

const LazyPage1m16o6r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m16o6r />
  </Suspense>
);

export { LazyPage1m16o6r };
