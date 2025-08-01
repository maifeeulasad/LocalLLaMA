import React, { lazy, Suspense } from 'react';

const Page1mearht = lazy(() => import('./Page'));

const LazyPage1mearht = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mearht />
  </Suspense>
);

export { LazyPage1mearht };
