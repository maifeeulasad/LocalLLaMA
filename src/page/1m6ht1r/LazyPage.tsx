import React, { lazy, Suspense } from 'react';

const Page1m6ht1r = lazy(() => import('./Page'));

const LazyPage1m6ht1r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ht1r />
  </Suspense>
);

export { LazyPage1m6ht1r };
