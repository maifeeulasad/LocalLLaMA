import React, { lazy, Suspense } from 'react';

const Page1med15k = lazy(() => import('./Page'));

const LazyPage1med15k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1med15k />
  </Suspense>
);

export { LazyPage1med15k };
