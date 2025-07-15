import React, { lazy, Suspense } from 'react';

const Page1m0cgmc = lazy(() => import('./Page'));

const LazyPage1m0cgmc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0cgmc />
  </Suspense>
);

export { LazyPage1m0cgmc };
