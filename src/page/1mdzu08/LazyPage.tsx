import React, { lazy, Suspense } from 'react';

const Page1mdzu08 = lazy(() => import('./Page'));

const LazyPage1mdzu08 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdzu08 />
  </Suspense>
);

export { LazyPage1mdzu08 };
