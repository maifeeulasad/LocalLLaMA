import React, { lazy, Suspense } from 'react';

const Page1m7oolz = lazy(() => import('./Page'));

const LazyPage1m7oolz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7oolz />
  </Suspense>
);

export { LazyPage1m7oolz };
