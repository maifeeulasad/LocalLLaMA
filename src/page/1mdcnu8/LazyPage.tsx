import React, { lazy, Suspense } from 'react';

const Page1mdcnu8 = lazy(() => import('./Page'));

const LazyPage1mdcnu8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdcnu8 />
  </Suspense>
);

export { LazyPage1mdcnu8 };
