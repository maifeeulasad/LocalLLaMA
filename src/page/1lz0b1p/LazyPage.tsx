import React, { lazy, Suspense } from 'react';

const Page1lz0b1p = lazy(() => import('./Page'));

const LazyPage1lz0b1p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz0b1p />
  </Suspense>
);

export { LazyPage1lz0b1p };
