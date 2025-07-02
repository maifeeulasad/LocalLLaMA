import React, { lazy, Suspense } from 'react';

const Page1lp8kzx = lazy(() => import('./Page'));

const LazyPage1lp8kzx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp8kzx />
  </Suspense>
);

export { LazyPage1lp8kzx };
