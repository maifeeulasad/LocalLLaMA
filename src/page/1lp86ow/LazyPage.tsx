import React, { lazy, Suspense } from 'react';

const Page1lp86ow = lazy(() => import('./Page'));

const LazyPage1lp86ow = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp86ow />
  </Suspense>
);

export { LazyPage1lp86ow };
