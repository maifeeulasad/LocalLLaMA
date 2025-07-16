import React, { lazy, Suspense } from 'react';

const Page1m0tkly = lazy(() => import('./Page'));

const LazyPage1m0tkly = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0tkly />
  </Suspense>
);

export { LazyPage1m0tkly };
