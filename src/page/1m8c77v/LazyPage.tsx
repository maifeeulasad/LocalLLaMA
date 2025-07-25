import React, { lazy, Suspense } from 'react';

const Page1m8c77v = lazy(() => import('./Page'));

const LazyPage1m8c77v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8c77v />
  </Suspense>
);

export { LazyPage1m8c77v };
