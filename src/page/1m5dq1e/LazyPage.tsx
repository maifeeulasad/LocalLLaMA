import React, { lazy, Suspense } from 'react';

const Page1m5dq1e = lazy(() => import('./Page'));

const LazyPage1m5dq1e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5dq1e />
  </Suspense>
);

export { LazyPage1m5dq1e };
