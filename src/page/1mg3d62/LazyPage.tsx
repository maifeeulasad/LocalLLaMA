import React, { lazy, Suspense } from 'react';

const Page1mg3d62 = lazy(() => import('./Page'));

const LazyPage1mg3d62 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg3d62 />
  </Suspense>
);

export { LazyPage1mg3d62 };
