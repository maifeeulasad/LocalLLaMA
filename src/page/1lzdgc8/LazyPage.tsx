import React, { lazy, Suspense } from 'react';

const Page1lzdgc8 = lazy(() => import('./Page'));

const LazyPage1lzdgc8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzdgc8 />
  </Suspense>
);

export { LazyPage1lzdgc8 };
