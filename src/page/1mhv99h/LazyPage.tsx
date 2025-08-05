import React, { lazy, Suspense } from 'react';

const Page1mhv99h = lazy(() => import('./Page'));

const LazyPage1mhv99h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhv99h />
  </Suspense>
);

export { LazyPage1mhv99h };
