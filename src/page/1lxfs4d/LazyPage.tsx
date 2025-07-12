import React, { lazy, Suspense } from 'react';

const Page1lxfs4d = lazy(() => import('./Page'));

const LazyPage1lxfs4d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxfs4d />
  </Suspense>
);

export { LazyPage1lxfs4d };
