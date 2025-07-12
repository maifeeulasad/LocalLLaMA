import React, { lazy, Suspense } from 'react';

const Page1lxqk44 = lazy(() => import('./Page'));

const LazyPage1lxqk44 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxqk44 />
  </Suspense>
);

export { LazyPage1lxqk44 };
