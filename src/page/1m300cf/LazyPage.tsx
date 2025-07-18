import React, { lazy, Suspense } from 'react';

const Page1m300cf = lazy(() => import('./Page'));

const LazyPage1m300cf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m300cf />
  </Suspense>
);

export { LazyPage1m300cf };
