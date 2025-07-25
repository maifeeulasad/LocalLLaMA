import React, { lazy, Suspense } from 'react';

const Page1m841b1 = lazy(() => import('./Page'));

const LazyPage1m841b1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m841b1 />
  </Suspense>
);

export { LazyPage1m841b1 };
