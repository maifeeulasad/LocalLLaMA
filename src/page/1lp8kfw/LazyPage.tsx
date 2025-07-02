import React, { lazy, Suspense } from 'react';

const Page1lp8kfw = lazy(() => import('./Page'));

const LazyPage1lp8kfw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp8kfw />
  </Suspense>
);

export { LazyPage1lp8kfw };
