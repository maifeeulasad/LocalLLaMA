import React, { lazy, Suspense } from 'react';

const Page1mj5qx1 = lazy(() => import('./Page'));

const LazyPage1mj5qx1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj5qx1 />
  </Suspense>
);

export { LazyPage1mj5qx1 };
