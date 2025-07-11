import React, { lazy, Suspense } from 'react';

const Page1lwbv22 = lazy(() => import('./Page'));

const LazyPage1lwbv22 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwbv22 />
  </Suspense>
);

export { LazyPage1lwbv22 };
