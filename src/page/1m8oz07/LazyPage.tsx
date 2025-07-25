import React, { lazy, Suspense } from 'react';

const Page1m8oz07 = lazy(() => import('./Page'));

const LazyPage1m8oz07 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8oz07 />
  </Suspense>
);

export { LazyPage1m8oz07 };
