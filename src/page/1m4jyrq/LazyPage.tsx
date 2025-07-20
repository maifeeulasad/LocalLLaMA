import React, { lazy, Suspense } from 'react';

const Page1m4jyrq = lazy(() => import('./Page'));

const LazyPage1m4jyrq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4jyrq />
  </Suspense>
);

export { LazyPage1m4jyrq };
