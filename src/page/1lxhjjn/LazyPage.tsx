import React, { lazy, Suspense } from 'react';

const Page1lxhjjn = lazy(() => import('./Page'));

const LazyPage1lxhjjn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxhjjn />
  </Suspense>
);

export { LazyPage1lxhjjn };
