import React, { lazy, Suspense } from 'react';

const Page1lz2i5h = lazy(() => import('./Page'));

const LazyPage1lz2i5h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz2i5h />
  </Suspense>
);

export { LazyPage1lz2i5h };
