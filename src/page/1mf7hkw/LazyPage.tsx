import React, { lazy, Suspense } from 'react';

const Page1mf7hkw = lazy(() => import('./Page'));

const LazyPage1mf7hkw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf7hkw />
  </Suspense>
);

export { LazyPage1mf7hkw };
