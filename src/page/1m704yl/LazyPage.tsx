import React, { lazy, Suspense } from 'react';

const Page1m704yl = lazy(() => import('./Page'));

const LazyPage1m704yl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m704yl />
  </Suspense>
);

export { LazyPage1m704yl };
