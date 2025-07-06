import React, { lazy, Suspense } from 'react';

const Page1lsu2ks = lazy(() => import('./Page'));

const LazyPage1lsu2ks = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsu2ks />
  </Suspense>
);

export { LazyPage1lsu2ks };
