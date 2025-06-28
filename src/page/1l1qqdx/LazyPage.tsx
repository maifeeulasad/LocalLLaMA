import React, { lazy, Suspense } from 'react';

const Page1l1qqdx = lazy(() => import('./Page'));

const LazyPage1l1qqdx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1l1qqdx />
  </Suspense>
);

export { LazyPage1l1qqdx };
