import React, { lazy, Suspense } from 'react';

const Page1lxes5c = lazy(() => import('./Page'));

const LazyPage1lxes5c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxes5c />
  </Suspense>
);

export { LazyPage1lxes5c };
