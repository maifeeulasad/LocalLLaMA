import React, { lazy, Suspense } from 'react';

const Page1mdma9a = lazy(() => import('./Page'));

const LazyPage1mdma9a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdma9a />
  </Suspense>
);

export { LazyPage1mdma9a };
