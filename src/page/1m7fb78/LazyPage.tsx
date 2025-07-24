import React, { lazy, Suspense } from 'react';

const Page1m7fb78 = lazy(() => import('./Page'));

const LazyPage1m7fb78 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7fb78 />
  </Suspense>
);

export { LazyPage1m7fb78 };
