import React, { lazy, Suspense } from 'react';

const Page1mbsi46 = lazy(() => import('./Page'));

const LazyPage1mbsi46 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbsi46 />
  </Suspense>
);

export { LazyPage1mbsi46 };
