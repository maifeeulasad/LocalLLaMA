import React, { lazy, Suspense } from 'react';

const Page1m8l55o = lazy(() => import('./Page'));

const LazyPage1m8l55o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8l55o />
  </Suspense>
);

export { LazyPage1m8l55o };
