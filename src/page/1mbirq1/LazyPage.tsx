import React, { lazy, Suspense } from 'react';

const Page1mbirq1 = lazy(() => import('./Page'));

const LazyPage1mbirq1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbirq1 />
  </Suspense>
);

export { LazyPage1mbirq1 };
