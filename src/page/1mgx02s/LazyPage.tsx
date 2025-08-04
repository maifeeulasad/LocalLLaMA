import React, { lazy, Suspense } from 'react';

const Page1mgx02s = lazy(() => import('./Page'));

const LazyPage1mgx02s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgx02s />
  </Suspense>
);

export { LazyPage1mgx02s };
