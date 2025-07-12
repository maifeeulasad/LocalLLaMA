import React, { lazy, Suspense } from 'react';

const Page1lxfep2 = lazy(() => import('./Page'));

const LazyPage1lxfep2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxfep2 />
  </Suspense>
);

export { LazyPage1lxfep2 };
