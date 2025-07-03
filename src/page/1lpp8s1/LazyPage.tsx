import React, { lazy, Suspense } from 'react';

const Page1lpp8s1 = lazy(() => import('./Page'));

const LazyPage1lpp8s1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpp8s1 />
  </Suspense>
);

export { LazyPage1lpp8s1 };
