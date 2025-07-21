import React, { lazy, Suspense } from 'react';

const Page1m4z64o = lazy(() => import('./Page'));

const LazyPage1m4z64o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4z64o />
  </Suspense>
);

export { LazyPage1m4z64o };
