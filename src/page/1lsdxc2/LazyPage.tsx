import React, { lazy, Suspense } from 'react';

const Page1lsdxc2 = lazy(() => import('./Page'));

const LazyPage1lsdxc2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsdxc2 />
  </Suspense>
);

export { LazyPage1lsdxc2 };
