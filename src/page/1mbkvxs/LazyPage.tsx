import React, { lazy, Suspense } from 'react';

const Page1mbkvxs = lazy(() => import('./Page'));

const LazyPage1mbkvxs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbkvxs />
  </Suspense>
);

export { LazyPage1mbkvxs };
