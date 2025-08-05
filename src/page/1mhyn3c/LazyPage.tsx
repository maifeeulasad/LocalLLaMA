import React, { lazy, Suspense } from 'react';

const Page1mhyn3c = lazy(() => import('./Page'));

const LazyPage1mhyn3c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhyn3c />
  </Suspense>
);

export { LazyPage1mhyn3c };
