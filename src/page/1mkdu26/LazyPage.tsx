import React, { lazy, Suspense } from 'react';

const Page1mkdu26 = lazy(() => import('./Page'));

const LazyPage1mkdu26 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkdu26 />
  </Suspense>
);

export { LazyPage1mkdu26 };
