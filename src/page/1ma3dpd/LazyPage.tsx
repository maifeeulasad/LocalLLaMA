import React, { lazy, Suspense } from 'react';

const Page1ma3dpd = lazy(() => import('./Page'));

const LazyPage1ma3dpd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma3dpd />
  </Suspense>
);

export { LazyPage1ma3dpd };
