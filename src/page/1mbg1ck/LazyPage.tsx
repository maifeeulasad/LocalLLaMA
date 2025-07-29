import React, { lazy, Suspense } from 'react';

const Page1mbg1ck = lazy(() => import('./Page'));

const LazyPage1mbg1ck = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbg1ck />
  </Suspense>
);

export { LazyPage1mbg1ck };
