import React, { lazy, Suspense } from 'react';

const Page1miyra3 = lazy(() => import('./Page'));

const LazyPage1miyra3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miyra3 />
  </Suspense>
);

export { LazyPage1miyra3 };
