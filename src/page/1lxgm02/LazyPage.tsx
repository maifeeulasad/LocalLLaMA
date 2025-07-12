import React, { lazy, Suspense } from 'react';

const Page1lxgm02 = lazy(() => import('./Page'));

const LazyPage1lxgm02 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxgm02 />
  </Suspense>
);

export { LazyPage1lxgm02 };
