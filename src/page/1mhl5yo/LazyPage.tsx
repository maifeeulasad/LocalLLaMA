import React, { lazy, Suspense } from 'react';

const Page1mhl5yo = lazy(() => import('./Page'));

const LazyPage1mhl5yo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhl5yo />
  </Suspense>
);

export { LazyPage1mhl5yo };
