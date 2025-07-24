import React, { lazy, Suspense } from 'react';

const Page1m7e5pi = lazy(() => import('./Page'));

const LazyPage1m7e5pi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7e5pi />
  </Suspense>
);

export { LazyPage1m7e5pi };
