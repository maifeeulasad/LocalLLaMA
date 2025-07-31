import React, { lazy, Suspense } from 'react';

const Page1mdjl0q = lazy(() => import('./Page'));

const LazyPage1mdjl0q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdjl0q />
  </Suspense>
);

export { LazyPage1mdjl0q };
