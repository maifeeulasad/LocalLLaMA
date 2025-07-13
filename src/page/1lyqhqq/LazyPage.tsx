import React, { lazy, Suspense } from 'react';

const Page1lyqhqq = lazy(() => import('./Page'));

const LazyPage1lyqhqq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyqhqq />
  </Suspense>
);

export { LazyPage1lyqhqq };
