import React, { lazy, Suspense } from 'react';

const Page1mdhfhs = lazy(() => import('./Page'));

const LazyPage1mdhfhs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdhfhs />
  </Suspense>
);

export { LazyPage1mdhfhs };
