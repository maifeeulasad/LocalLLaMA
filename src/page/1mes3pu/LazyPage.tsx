import React, { lazy, Suspense } from 'react';

const Page1mes3pu = lazy(() => import('./Page'));

const LazyPage1mes3pu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mes3pu />
  </Suspense>
);

export { LazyPage1mes3pu };
