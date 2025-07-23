import React, { lazy, Suspense } from 'react';

const Page1m6qixu = lazy(() => import('./Page'));

const LazyPage1m6qixu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6qixu />
  </Suspense>
);

export { LazyPage1m6qixu };
