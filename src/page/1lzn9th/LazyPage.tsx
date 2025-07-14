import React, { lazy, Suspense } from 'react';

const Page1lzn9th = lazy(() => import('./Page'));

const LazyPage1lzn9th = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzn9th />
  </Suspense>
);

export { LazyPage1lzn9th };
