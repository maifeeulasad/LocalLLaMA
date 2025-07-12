import React, { lazy, Suspense } from 'react';

const Page1lxwodv = lazy(() => import('./Page'));

const LazyPage1lxwodv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxwodv />
  </Suspense>
);

export { LazyPage1lxwodv };
