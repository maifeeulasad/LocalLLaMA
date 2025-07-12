import React, { lazy, Suspense } from 'react';

const Page1lxw3zz = lazy(() => import('./Page'));

const LazyPage1lxw3zz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxw3zz />
  </Suspense>
);

export { LazyPage1lxw3zz };
