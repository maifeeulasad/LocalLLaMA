import React, { lazy, Suspense } from 'react';

const Page1ly36ht = lazy(() => import('./Page'));

const LazyPage1ly36ht = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly36ht />
  </Suspense>
);

export { LazyPage1ly36ht };
