import React, { lazy, Suspense } from 'react';

const Page1lokp88 = lazy(() => import('./Page'));

const LazyPage1lokp88 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lokp88 />
  </Suspense>
);

export { LazyPage1lokp88 };
