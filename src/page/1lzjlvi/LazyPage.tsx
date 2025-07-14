import React, { lazy, Suspense } from 'react';

const Page1lzjlvi = lazy(() => import('./Page'));

const LazyPage1lzjlvi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzjlvi />
  </Suspense>
);

export { LazyPage1lzjlvi };
