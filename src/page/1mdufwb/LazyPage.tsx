import React, { lazy, Suspense } from 'react';

const Page1mdufwb = lazy(() => import('./Page'));

const LazyPage1mdufwb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdufwb />
  </Suspense>
);

export { LazyPage1mdufwb };
