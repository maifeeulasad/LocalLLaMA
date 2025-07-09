import React, { lazy, Suspense } from 'react';

const Page1lviwb4 = lazy(() => import('./Page'));

const LazyPage1lviwb4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lviwb4 />
  </Suspense>
);

export { LazyPage1lviwb4 };
