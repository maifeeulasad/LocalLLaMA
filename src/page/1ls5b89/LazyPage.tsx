import React, { lazy, Suspense } from 'react';

const Page1ls5b89 = lazy(() => import('./Page'));

const LazyPage1ls5b89 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls5b89 />
  </Suspense>
);

export { LazyPage1ls5b89 };
