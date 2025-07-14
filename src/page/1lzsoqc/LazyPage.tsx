import React, { lazy, Suspense } from 'react';

const Page1lzsoqc = lazy(() => import('./Page'));

const LazyPage1lzsoqc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzsoqc />
  </Suspense>
);

export { LazyPage1lzsoqc };
