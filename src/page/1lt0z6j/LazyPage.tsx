import React, { lazy, Suspense } from 'react';

const Page1lt0z6j = lazy(() => import('./Page'));

const LazyPage1lt0z6j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt0z6j />
  </Suspense>
);

export { LazyPage1lt0z6j };
