import React, { lazy, Suspense } from 'react';

const Page1m9j02q = lazy(() => import('./Page'));

const LazyPage1m9j02q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9j02q />
  </Suspense>
);

export { LazyPage1m9j02q };
