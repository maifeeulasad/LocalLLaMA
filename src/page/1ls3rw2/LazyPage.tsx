import React, { lazy, Suspense } from 'react';

const Page1ls3rw2 = lazy(() => import('./Page'));

const LazyPage1ls3rw2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls3rw2 />
  </Suspense>
);

export { LazyPage1ls3rw2 };
