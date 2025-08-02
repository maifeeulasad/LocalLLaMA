import React, { lazy, Suspense } from 'react';

const Page1mfofx5 = lazy(() => import('./Page'));

const LazyPage1mfofx5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfofx5 />
  </Suspense>
);

export { LazyPage1mfofx5 };
