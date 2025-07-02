import React, { lazy, Suspense } from 'react';

const Page1lpbamg = lazy(() => import('./Page'));

const LazyPage1lpbamg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpbamg />
  </Suspense>
);

export { LazyPage1lpbamg };
