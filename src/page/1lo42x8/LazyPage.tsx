import React, { lazy, Suspense } from 'react';

const Page1lo42x8 = lazy(() => import('./Page'));

const LazyPage1lo42x8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo42x8 />
  </Suspense>
);

export { LazyPage1lo42x8 };
