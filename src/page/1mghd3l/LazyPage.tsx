import React, { lazy, Suspense } from 'react';

const Page1mghd3l = lazy(() => import('./Page'));

const LazyPage1mghd3l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mghd3l />
  </Suspense>
);

export { LazyPage1mghd3l };
