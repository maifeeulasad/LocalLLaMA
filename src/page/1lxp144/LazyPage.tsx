import React, { lazy, Suspense } from 'react';

const Page1lxp144 = lazy(() => import('./Page'));

const LazyPage1lxp144 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxp144 />
  </Suspense>
);

export { LazyPage1lxp144 };
