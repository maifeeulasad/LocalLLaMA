import React, { lazy, Suspense } from 'react';

const Page1m3qg3w = lazy(() => import('./Page'));

const LazyPage1m3qg3w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3qg3w />
  </Suspense>
);

export { LazyPage1m3qg3w };
