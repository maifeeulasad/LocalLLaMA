import React, { lazy, Suspense } from 'react';

const Page1lsqr9n = lazy(() => import('./Page'));

const LazyPage1lsqr9n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsqr9n />
  </Suspense>
);

export { LazyPage1lsqr9n };
