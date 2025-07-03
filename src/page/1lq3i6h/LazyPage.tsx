import React, { lazy, Suspense } from 'react';

const Page1lq3i6h = lazy(() => import('./Page'));

const LazyPage1lq3i6h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq3i6h />
  </Suspense>
);

export { LazyPage1lq3i6h };
