import React, { lazy, Suspense } from 'react';

const Page1madv3y = lazy(() => import('./Page'));

const LazyPage1madv3y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1madv3y />
  </Suspense>
);

export { LazyPage1madv3y };
