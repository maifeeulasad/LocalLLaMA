import React, { lazy, Suspense } from 'react';

const Page1lq1417 = lazy(() => import('./Page'));

const LazyPage1lq1417 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq1417 />
  </Suspense>
);

export { LazyPage1lq1417 };
