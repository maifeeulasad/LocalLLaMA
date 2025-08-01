import React, { lazy, Suspense } from 'react';

const Page1mehark = lazy(() => import('./Page'));

const LazyPage1mehark = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mehark />
  </Suspense>
);

export { LazyPage1mehark };
