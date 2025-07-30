import React, { lazy, Suspense } from 'react';

const Page1mcee42 = lazy(() => import('./Page'));

const LazyPage1mcee42 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcee42 />
  </Suspense>
);

export { LazyPage1mcee42 };
