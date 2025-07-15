import React, { lazy, Suspense } from 'react';

const Page1m041m4 = lazy(() => import('./Page'));

const LazyPage1m041m4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m041m4 />
  </Suspense>
);

export { LazyPage1m041m4 };
