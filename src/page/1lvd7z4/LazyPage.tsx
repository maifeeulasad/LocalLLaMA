import React, { lazy, Suspense } from 'react';

const Page1lvd7z4 = lazy(() => import('./Page'));

const LazyPage1lvd7z4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvd7z4 />
  </Suspense>
);

export { LazyPage1lvd7z4 };
