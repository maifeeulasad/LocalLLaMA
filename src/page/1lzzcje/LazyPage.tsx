import React, { lazy, Suspense } from 'react';

const Page1lzzcje = lazy(() => import('./Page'));

const LazyPage1lzzcje = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzzcje />
  </Suspense>
);

export { LazyPage1lzzcje };
