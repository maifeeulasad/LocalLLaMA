import React, { lazy, Suspense } from 'react';

const Page1lxufzz = lazy(() => import('./Page'));

const LazyPage1lxufzz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxufzz />
  </Suspense>
);

export { LazyPage1lxufzz };
