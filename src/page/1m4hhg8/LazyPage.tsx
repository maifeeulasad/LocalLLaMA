import React, { lazy, Suspense } from 'react';

const Page1m4hhg8 = lazy(() => import('./Page'));

const LazyPage1m4hhg8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4hhg8 />
  </Suspense>
);

export { LazyPage1m4hhg8 };
