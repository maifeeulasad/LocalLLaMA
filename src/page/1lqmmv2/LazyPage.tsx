import React, { lazy, Suspense } from 'react';

const Page1lqmmv2 = lazy(() => import('./Page'));

const LazyPage1lqmmv2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqmmv2 />
  </Suspense>
);

export { LazyPage1lqmmv2 };
