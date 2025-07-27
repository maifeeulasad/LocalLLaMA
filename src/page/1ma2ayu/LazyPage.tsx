import React, { lazy, Suspense } from 'react';

const Page1ma2ayu = lazy(() => import('./Page'));

const LazyPage1ma2ayu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma2ayu />
  </Suspense>
);

export { LazyPage1ma2ayu };
