import React, { lazy, Suspense } from 'react';

const Page1lwafqm = lazy(() => import('./Page'));

const LazyPage1lwafqm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwafqm />
  </Suspense>
);

export { LazyPage1lwafqm };
