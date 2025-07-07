import React, { lazy, Suspense } from 'react';

const Page1ltbg2s = lazy(() => import('./Page'));

const LazyPage1ltbg2s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltbg2s />
  </Suspense>
);

export { LazyPage1ltbg2s };
