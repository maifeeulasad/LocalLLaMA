import React, { lazy, Suspense } from 'react';

const Page1lxv6a5 = lazy(() => import('./Page'));

const LazyPage1lxv6a5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxv6a5 />
  </Suspense>
);

export { LazyPage1lxv6a5 };
