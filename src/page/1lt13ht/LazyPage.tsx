import React, { lazy, Suspense } from 'react';

const Page1lt13ht = lazy(() => import('./Page'));

const LazyPage1lt13ht = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt13ht />
  </Suspense>
);

export { LazyPage1lt13ht };
