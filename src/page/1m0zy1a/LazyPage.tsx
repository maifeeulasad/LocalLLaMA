import React, { lazy, Suspense } from 'react';

const Page1m0zy1a = lazy(() => import('./Page'));

const LazyPage1m0zy1a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0zy1a />
  </Suspense>
);

export { LazyPage1m0zy1a };
