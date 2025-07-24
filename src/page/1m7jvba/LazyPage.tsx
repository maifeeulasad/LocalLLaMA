import React, { lazy, Suspense } from 'react';

const Page1m7jvba = lazy(() => import('./Page'));

const LazyPage1m7jvba = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7jvba />
  </Suspense>
);

export { LazyPage1m7jvba };
