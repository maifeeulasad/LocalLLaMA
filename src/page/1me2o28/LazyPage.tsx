import React, { lazy, Suspense } from 'react';

const Page1me2o28 = lazy(() => import('./Page'));

const LazyPage1me2o28 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me2o28 />
  </Suspense>
);

export { LazyPage1me2o28 };
