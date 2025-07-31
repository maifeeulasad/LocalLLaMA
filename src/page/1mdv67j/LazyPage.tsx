import React, { lazy, Suspense } from 'react';

const Page1mdv67j = lazy(() => import('./Page'));

const LazyPage1mdv67j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdv67j />
  </Suspense>
);

export { LazyPage1mdv67j };
