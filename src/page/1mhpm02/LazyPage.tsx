import React, { lazy, Suspense } from 'react';

const Page1mhpm02 = lazy(() => import('./Page'));

const LazyPage1mhpm02 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhpm02 />
  </Suspense>
);

export { LazyPage1mhpm02 };
