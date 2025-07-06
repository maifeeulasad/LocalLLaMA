import React, { lazy, Suspense } from 'react';

const Page1lrrvva = lazy(() => import('./Page'));

const LazyPage1lrrvva = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrrvva />
  </Suspense>
);

export { LazyPage1lrrvva };
