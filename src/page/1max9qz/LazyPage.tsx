import React, { lazy, Suspense } from 'react';

const Page1max9qz = lazy(() => import('./Page'));

const LazyPage1max9qz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1max9qz />
  </Suspense>
);

export { LazyPage1max9qz };
