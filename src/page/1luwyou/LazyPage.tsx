import React, { lazy, Suspense } from 'react';

const Page1luwyou = lazy(() => import('./Page'));

const LazyPage1luwyou = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luwyou />
  </Suspense>
);

export { LazyPage1luwyou };
