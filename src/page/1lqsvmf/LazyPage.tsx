import React, { lazy, Suspense } from 'react';

const Page1lqsvmf = lazy(() => import('./Page'));

const LazyPage1lqsvmf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqsvmf />
  </Suspense>
);

export { LazyPage1lqsvmf };
