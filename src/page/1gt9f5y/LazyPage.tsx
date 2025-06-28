import React, { lazy, Suspense } from 'react';

const Page1gt9f5y = lazy(() => import('./Page'));

const LazyPage1gt9f5y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1gt9f5y />
  </Suspense>
);

export { LazyPage1gt9f5y };
