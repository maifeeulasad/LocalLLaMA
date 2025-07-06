import React, { lazy, Suspense } from 'react';

const Page1lswa0q = lazy(() => import('./Page'));

const LazyPage1lswa0q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lswa0q />
  </Suspense>
);

export { LazyPage1lswa0q };
