import React, { lazy, Suspense } from 'react';

const Page1m7m5br = lazy(() => import('./Page'));

const LazyPage1m7m5br = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7m5br />
  </Suspense>
);

export { LazyPage1m7m5br };
