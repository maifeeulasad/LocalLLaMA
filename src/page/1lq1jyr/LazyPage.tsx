import React, { lazy, Suspense } from 'react';

const Page1lq1jyr = lazy(() => import('./Page'));

const LazyPage1lq1jyr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq1jyr />
  </Suspense>
);

export { LazyPage1lq1jyr };
