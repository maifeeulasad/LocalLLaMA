import React, { lazy, Suspense } from 'react';

const Page1lqlsyb = lazy(() => import('./Page'));

const LazyPage1lqlsyb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqlsyb />
  </Suspense>
);

export { LazyPage1lqlsyb };
