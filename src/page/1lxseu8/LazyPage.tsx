import React, { lazy, Suspense } from 'react';

const Page1lxseu8 = lazy(() => import('./Page'));

const LazyPage1lxseu8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxseu8 />
  </Suspense>
);

export { LazyPage1lxseu8 };
