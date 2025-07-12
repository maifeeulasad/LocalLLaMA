import React, { lazy, Suspense } from 'react';

const Page1lx4mad = lazy(() => import('./Page'));

const LazyPage1lx4mad = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx4mad />
  </Suspense>
);

export { LazyPage1lx4mad };
