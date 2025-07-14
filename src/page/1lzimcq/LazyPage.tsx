import React, { lazy, Suspense } from 'react';

const Page1lzimcq = lazy(() => import('./Page'));

const LazyPage1lzimcq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzimcq />
  </Suspense>
);

export { LazyPage1lzimcq };
