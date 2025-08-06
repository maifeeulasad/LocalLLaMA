import React, { lazy, Suspense } from 'react';

const Page1miwzfv = lazy(() => import('./Page'));

const LazyPage1miwzfv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miwzfv />
  </Suspense>
);

export { LazyPage1miwzfv };
