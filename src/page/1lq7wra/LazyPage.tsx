import React, { lazy, Suspense } from 'react';

const Page1lq7wra = lazy(() => import('./Page'));

const LazyPage1lq7wra = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq7wra />
  </Suspense>
);

export { LazyPage1lq7wra };
