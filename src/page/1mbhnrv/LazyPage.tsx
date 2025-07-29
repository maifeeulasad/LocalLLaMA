import React, { lazy, Suspense } from 'react';

const Page1mbhnrv = lazy(() => import('./Page'));

const LazyPage1mbhnrv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbhnrv />
  </Suspense>
);

export { LazyPage1mbhnrv };
