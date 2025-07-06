import React, { lazy, Suspense } from 'react';

const Page1lsdjnb = lazy(() => import('./Page'));

const LazyPage1lsdjnb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsdjnb />
  </Suspense>
);

export { LazyPage1lsdjnb };
