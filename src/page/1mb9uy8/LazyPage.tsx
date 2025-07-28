import React, { lazy, Suspense } from 'react';

const Page1mb9uy8 = lazy(() => import('./Page'));

const LazyPage1mb9uy8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb9uy8 />
  </Suspense>
);

export { LazyPage1mb9uy8 };
