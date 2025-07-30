import React, { lazy, Suspense } from 'react';

const Page1mca20c = lazy(() => import('./Page'));

const LazyPage1mca20c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mca20c />
  </Suspense>
);

export { LazyPage1mca20c };
