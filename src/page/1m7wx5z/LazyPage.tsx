import React, { lazy, Suspense } from 'react';

const Page1m7wx5z = lazy(() => import('./Page'));

const LazyPage1m7wx5z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7wx5z />
  </Suspense>
);

export { LazyPage1m7wx5z };
