import React, { lazy, Suspense } from 'react';

const Page1lue75q = lazy(() => import('./Page'));

const LazyPage1lue75q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lue75q />
  </Suspense>
);

export { LazyPage1lue75q };
