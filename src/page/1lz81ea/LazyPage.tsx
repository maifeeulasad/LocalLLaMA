import React, { lazy, Suspense } from 'react';

const Page1lz81ea = lazy(() => import('./Page'));

const LazyPage1lz81ea = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz81ea />
  </Suspense>
);

export { LazyPage1lz81ea };
