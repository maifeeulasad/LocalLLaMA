import React, { lazy, Suspense } from 'react';

const Page1min4lz = lazy(() => import('./Page'));

const LazyPage1min4lz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1min4lz />
  </Suspense>
);

export { LazyPage1min4lz };
