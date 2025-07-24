import React, { lazy, Suspense } from 'react';

const Page1m7u9fz = lazy(() => import('./Page'));

const LazyPage1m7u9fz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7u9fz />
  </Suspense>
);

export { LazyPage1m7u9fz };
