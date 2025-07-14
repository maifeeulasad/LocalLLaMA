import React, { lazy, Suspense } from 'react';

const Page1lzbadq = lazy(() => import('./Page'));

const LazyPage1lzbadq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzbadq />
  </Suspense>
);

export { LazyPage1lzbadq };
