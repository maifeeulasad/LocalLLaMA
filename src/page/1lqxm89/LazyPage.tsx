import React, { lazy, Suspense } from 'react';

const Page1lqxm89 = lazy(() => import('./Page'));

const LazyPage1lqxm89 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqxm89 />
  </Suspense>
);

export { LazyPage1lqxm89 };
