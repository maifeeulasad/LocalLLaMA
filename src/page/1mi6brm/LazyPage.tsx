import React, { lazy, Suspense } from 'react';

const Page1mi6brm = lazy(() => import('./Page'));

const LazyPage1mi6brm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi6brm />
  </Suspense>
);

export { LazyPage1mi6brm };
