import React, { lazy, Suspense } from 'react';

const Page1mcw1sl = lazy(() => import('./Page'));

const LazyPage1mcw1sl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcw1sl />
  </Suspense>
);

export { LazyPage1mcw1sl };
