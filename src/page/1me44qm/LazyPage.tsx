import React, { lazy, Suspense } from 'react';

const Page1me44qm = lazy(() => import('./Page'));

const LazyPage1me44qm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me44qm />
  </Suspense>
);

export { LazyPage1me44qm };
