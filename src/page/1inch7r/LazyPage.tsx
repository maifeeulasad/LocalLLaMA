import React, { lazy, Suspense } from 'react';

const Page1inch7r = lazy(() => import('./Page'));

const LazyPage1inch7r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1inch7r />
  </Suspense>
);

export { LazyPage1inch7r };
