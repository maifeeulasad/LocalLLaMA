import React, { lazy, Suspense } from 'react';

const Page1m57utu = lazy(() => import('./Page'));

const LazyPage1m57utu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m57utu />
  </Suspense>
);

export { LazyPage1m57utu };
