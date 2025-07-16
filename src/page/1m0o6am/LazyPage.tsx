import React, { lazy, Suspense } from 'react';

const Page1m0o6am = lazy(() => import('./Page'));

const LazyPage1m0o6am = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0o6am />
  </Suspense>
);

export { LazyPage1m0o6am };
