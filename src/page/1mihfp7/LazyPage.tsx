import React, { lazy, Suspense } from 'react';

const Page1mihfp7 = lazy(() => import('./Page'));

const LazyPage1mihfp7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mihfp7 />
  </Suspense>
);

export { LazyPage1mihfp7 };
