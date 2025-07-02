import React, { lazy, Suspense } from 'react';

const Page1lpn5k5 = lazy(() => import('./Page'));

const LazyPage1lpn5k5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpn5k5 />
  </Suspense>
);

export { LazyPage1lpn5k5 };
