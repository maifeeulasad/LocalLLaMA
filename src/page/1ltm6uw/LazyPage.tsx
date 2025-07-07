import React, { lazy, Suspense } from 'react';

const Page1ltm6uw = lazy(() => import('./Page'));

const LazyPage1ltm6uw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltm6uw />
  </Suspense>
);

export { LazyPage1ltm6uw };
