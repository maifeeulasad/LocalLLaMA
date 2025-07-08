import React, { lazy, Suspense } from 'react';

const Page1lujedm = lazy(() => import('./Page'));

const LazyPage1lujedm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lujedm />
  </Suspense>
);

export { LazyPage1lujedm };
