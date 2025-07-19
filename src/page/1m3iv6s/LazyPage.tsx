import React, { lazy, Suspense } from 'react';

const Page1m3iv6s = lazy(() => import('./Page'));

const LazyPage1m3iv6s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3iv6s />
  </Suspense>
);

export { LazyPage1m3iv6s };
