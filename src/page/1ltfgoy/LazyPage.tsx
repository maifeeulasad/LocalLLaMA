import React, { lazy, Suspense } from 'react';

const Page1ltfgoy = lazy(() => import('./Page'));

const LazyPage1ltfgoy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltfgoy />
  </Suspense>
);

export { LazyPage1ltfgoy };
