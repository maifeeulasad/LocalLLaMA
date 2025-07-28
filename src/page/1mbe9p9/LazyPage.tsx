import React, { lazy, Suspense } from 'react';

const Page1mbe9p9 = lazy(() => import('./Page'));

const LazyPage1mbe9p9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbe9p9 />
  </Suspense>
);

export { LazyPage1mbe9p9 };
