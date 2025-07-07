import React, { lazy, Suspense } from 'react';

const Page1lto2in = lazy(() => import('./Page'));

const LazyPage1lto2in = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lto2in />
  </Suspense>
);

export { LazyPage1lto2in };
