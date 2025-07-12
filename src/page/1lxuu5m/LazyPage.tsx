import React, { lazy, Suspense } from 'react';

const Page1lxuu5m = lazy(() => import('./Page'));

const LazyPage1lxuu5m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxuu5m />
  </Suspense>
);

export { LazyPage1lxuu5m };
