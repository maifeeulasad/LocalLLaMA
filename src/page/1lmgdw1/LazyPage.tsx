import React, { lazy, Suspense } from 'react';

const Page1lmgdw1 = lazy(() => import('./Page'));

const LazyPage1lmgdw1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmgdw1 />
  </Suspense>
);

export { LazyPage1lmgdw1 };
