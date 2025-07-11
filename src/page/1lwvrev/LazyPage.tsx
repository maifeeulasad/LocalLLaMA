import React, { lazy, Suspense } from 'react';

const Page1lwvrev = lazy(() => import('./Page'));

const LazyPage1lwvrev = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwvrev />
  </Suspense>
);

export { LazyPage1lwvrev };
