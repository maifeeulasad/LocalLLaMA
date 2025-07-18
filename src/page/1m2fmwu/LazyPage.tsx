import React, { lazy, Suspense } from 'react';

const Page1m2fmwu = lazy(() => import('./Page'));

const LazyPage1m2fmwu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2fmwu />
  </Suspense>
);

export { LazyPage1m2fmwu };
