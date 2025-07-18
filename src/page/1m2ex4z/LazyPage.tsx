import React, { lazy, Suspense } from 'react';

const Page1m2ex4z = lazy(() => import('./Page'));

const LazyPage1m2ex4z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2ex4z />
  </Suspense>
);

export { LazyPage1m2ex4z };
