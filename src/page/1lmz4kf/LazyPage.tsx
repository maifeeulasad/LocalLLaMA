import React, { lazy, Suspense } from 'react';

const Page1lmz4kf = lazy(() => import('./Page'));

const LazyPage1lmz4kf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmz4kf />
  </Suspense>
);

export { LazyPage1lmz4kf };
