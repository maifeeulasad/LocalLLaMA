import React, { lazy, Suspense } from 'react';

const Page1m7hq4w = lazy(() => import('./Page'));

const LazyPage1m7hq4w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7hq4w />
  </Suspense>
);

export { LazyPage1m7hq4w };
