import React, { lazy, Suspense } from 'react';

const Page1m6zdx4 = lazy(() => import('./Page'));

const LazyPage1m6zdx4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6zdx4 />
  </Suspense>
);

export { LazyPage1m6zdx4 };
