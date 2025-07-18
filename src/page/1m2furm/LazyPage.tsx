import React, { lazy, Suspense } from 'react';

const Page1m2furm = lazy(() => import('./Page'));

const LazyPage1m2furm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2furm />
  </Suspense>
);

export { LazyPage1m2furm };
