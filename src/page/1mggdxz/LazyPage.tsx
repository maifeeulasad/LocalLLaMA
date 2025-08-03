import React, { lazy, Suspense } from 'react';

const Page1mggdxz = lazy(() => import('./Page'));

const LazyPage1mggdxz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mggdxz />
  </Suspense>
);

export { LazyPage1mggdxz };
