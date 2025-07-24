import React, { lazy, Suspense } from 'react';

const Page1m7e8d0 = lazy(() => import('./Page'));

const LazyPage1m7e8d0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7e8d0 />
  </Suspense>
);

export { LazyPage1m7e8d0 };
