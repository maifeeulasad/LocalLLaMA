import React, { lazy, Suspense } from 'react';

const Page1lxa4hy = lazy(() => import('./Page'));

const LazyPage1lxa4hy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxa4hy />
  </Suspense>
);

export { LazyPage1lxa4hy };
