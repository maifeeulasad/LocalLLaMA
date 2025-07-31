import React, { lazy, Suspense } from 'react';

const Page1mdytsk = lazy(() => import('./Page'));

const LazyPage1mdytsk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdytsk />
  </Suspense>
);

export { LazyPage1mdytsk };
