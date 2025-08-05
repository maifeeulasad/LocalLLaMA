import React, { lazy, Suspense } from 'react';

const Page1mi24mj = lazy(() => import('./Page'));

const LazyPage1mi24mj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi24mj />
  </Suspense>
);

export { LazyPage1mi24mj };
