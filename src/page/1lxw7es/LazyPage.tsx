import React, { lazy, Suspense } from 'react';

const Page1lxw7es = lazy(() => import('./Page'));

const LazyPage1lxw7es = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxw7es />
  </Suspense>
);

export { LazyPage1lxw7es };
