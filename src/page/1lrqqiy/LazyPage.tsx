import React, { lazy, Suspense } from 'react';

const Page1lrqqiy = lazy(() => import('./Page'));

const LazyPage1lrqqiy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrqqiy />
  </Suspense>
);

export { LazyPage1lrqqiy };
