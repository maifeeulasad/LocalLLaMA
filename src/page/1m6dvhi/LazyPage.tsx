import React, { lazy, Suspense } from 'react';

const Page1m6dvhi = lazy(() => import('./Page'));

const LazyPage1m6dvhi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6dvhi />
  </Suspense>
);

export { LazyPage1m6dvhi };
