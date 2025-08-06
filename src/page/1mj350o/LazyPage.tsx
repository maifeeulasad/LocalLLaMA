import React, { lazy, Suspense } from 'react';

const Page1mj350o = lazy(() => import('./Page'));

const LazyPage1mj350o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj350o />
  </Suspense>
);

export { LazyPage1mj350o };
