import React, { lazy, Suspense } from 'react';

const Page1mdcv5k = lazy(() => import('./Page'));

const LazyPage1mdcv5k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdcv5k />
  </Suspense>
);

export { LazyPage1mdcv5k };
