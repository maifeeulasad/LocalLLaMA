import React, { lazy, Suspense } from 'react';

const Page1lt9t7r = lazy(() => import('./Page'));

const LazyPage1lt9t7r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt9t7r />
  </Suspense>
);

export { LazyPage1lt9t7r };
