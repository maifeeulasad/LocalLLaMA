import React, { lazy, Suspense } from 'react';

const Page1lss6b9 = lazy(() => import('./Page'));

const LazyPage1lss6b9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lss6b9 />
  </Suspense>
);

export { LazyPage1lss6b9 };
