import React, { lazy, Suspense } from 'react';

const Page1lxaz08 = lazy(() => import('./Page'));

const LazyPage1lxaz08 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxaz08 />
  </Suspense>
);

export { LazyPage1lxaz08 };
