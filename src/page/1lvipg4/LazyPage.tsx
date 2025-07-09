import React, { lazy, Suspense } from 'react';

const Page1lvipg4 = lazy(() => import('./Page'));

const LazyPage1lvipg4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvipg4 />
  </Suspense>
);

export { LazyPage1lvipg4 };
