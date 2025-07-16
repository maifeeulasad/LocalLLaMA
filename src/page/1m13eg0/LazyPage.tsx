import React, { lazy, Suspense } from 'react';

const Page1m13eg0 = lazy(() => import('./Page'));

const LazyPage1m13eg0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m13eg0 />
  </Suspense>
);

export { LazyPage1m13eg0 };
