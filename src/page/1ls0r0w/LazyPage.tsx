import React, { lazy, Suspense } from 'react';

const Page1ls0r0w = lazy(() => import('./Page'));

const LazyPage1ls0r0w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls0r0w />
  </Suspense>
);

export { LazyPage1ls0r0w };
