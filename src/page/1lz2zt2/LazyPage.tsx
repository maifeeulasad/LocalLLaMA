import React, { lazy, Suspense } from 'react';

const Page1lz2zt2 = lazy(() => import('./Page'));

const LazyPage1lz2zt2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz2zt2 />
  </Suspense>
);

export { LazyPage1lz2zt2 };
