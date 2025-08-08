import React, { lazy, Suspense } from 'react';

const Page1mkq4i4 = lazy(() => import('./Page'));

const LazyPage1mkq4i4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkq4i4 />
  </Suspense>
);

export { LazyPage1mkq4i4 };
