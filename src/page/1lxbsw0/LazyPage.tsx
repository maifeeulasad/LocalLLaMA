import React, { lazy, Suspense } from 'react';

const Page1lxbsw0 = lazy(() => import('./Page'));

const LazyPage1lxbsw0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxbsw0 />
  </Suspense>
);

export { LazyPage1lxbsw0 };
