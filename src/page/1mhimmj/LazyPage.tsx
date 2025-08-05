import React, { lazy, Suspense } from 'react';

const Page1mhimmj = lazy(() => import('./Page'));

const LazyPage1mhimmj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhimmj />
  </Suspense>
);

export { LazyPage1mhimmj };
