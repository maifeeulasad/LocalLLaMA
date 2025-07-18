import React, { lazy, Suspense } from 'react';

const Page1m342g1 = lazy(() => import('./Page'));

const LazyPage1m342g1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m342g1 />
  </Suspense>
);

export { LazyPage1m342g1 };
