import React, { lazy, Suspense } from 'react';

const Page1ltmou4 = lazy(() => import('./Page'));

const LazyPage1ltmou4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltmou4 />
  </Suspense>
);

export { LazyPage1ltmou4 };
