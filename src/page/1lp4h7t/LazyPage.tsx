import React, { lazy, Suspense } from 'react';

const Page1lp4h7t = lazy(() => import('./Page'));

const LazyPage1lp4h7t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp4h7t />
  </Suspense>
);

export { LazyPage1lp4h7t };
