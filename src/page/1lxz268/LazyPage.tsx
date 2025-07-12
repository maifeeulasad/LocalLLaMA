import React, { lazy, Suspense } from 'react';

const Page1lxz268 = lazy(() => import('./Page'));

const LazyPage1lxz268 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxz268 />
  </Suspense>
);

export { LazyPage1lxz268 };
