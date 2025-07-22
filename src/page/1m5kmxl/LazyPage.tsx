import React, { lazy, Suspense } from 'react';

const Page1m5kmxl = lazy(() => import('./Page'));

const LazyPage1m5kmxl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5kmxl />
  </Suspense>
);

export { LazyPage1m5kmxl };
