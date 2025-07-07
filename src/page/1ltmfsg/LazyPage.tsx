import React, { lazy, Suspense } from 'react';

const Page1ltmfsg = lazy(() => import('./Page'));

const LazyPage1ltmfsg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltmfsg />
  </Suspense>
);

export { LazyPage1ltmfsg };
