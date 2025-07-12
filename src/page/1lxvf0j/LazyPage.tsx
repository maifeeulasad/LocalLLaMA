import React, { lazy, Suspense } from 'react';

const Page1lxvf0j = lazy(() => import('./Page'));

const LazyPage1lxvf0j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxvf0j />
  </Suspense>
);

export { LazyPage1lxvf0j };
