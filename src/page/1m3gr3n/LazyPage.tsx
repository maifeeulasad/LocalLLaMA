import React, { lazy, Suspense } from 'react';

const Page1m3gr3n = lazy(() => import('./Page'));

const LazyPage1m3gr3n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3gr3n />
  </Suspense>
);

export { LazyPage1m3gr3n };
