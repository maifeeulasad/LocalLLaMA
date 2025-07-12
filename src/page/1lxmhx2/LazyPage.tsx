import React, { lazy, Suspense } from 'react';

const Page1lxmhx2 = lazy(() => import('./Page'));

const LazyPage1lxmhx2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxmhx2 />
  </Suspense>
);

export { LazyPage1lxmhx2 };
