import React, { lazy, Suspense } from 'react';

const Page1mkp0am = lazy(() => import('./Page'));

const LazyPage1mkp0am = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkp0am />
  </Suspense>
);

export { LazyPage1mkp0am };
