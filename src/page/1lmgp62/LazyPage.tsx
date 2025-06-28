import React, { lazy, Suspense } from 'react';

const Page1lmgp62 = lazy(() => import('./Page'));

const LazyPage1lmgp62 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmgp62 />
  </Suspense>
);

export { LazyPage1lmgp62 };
