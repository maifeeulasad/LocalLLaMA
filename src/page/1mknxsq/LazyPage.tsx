import React, { lazy, Suspense } from 'react';

const Page1mknxsq = lazy(() => import('./Page'));

const LazyPage1mknxsq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mknxsq />
  </Suspense>
);

export { LazyPage1mknxsq };
