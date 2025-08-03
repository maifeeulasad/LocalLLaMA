import React, { lazy, Suspense } from 'react';

const Page1mgfuf3 = lazy(() => import('./Page'));

const LazyPage1mgfuf3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgfuf3 />
  </Suspense>
);

export { LazyPage1mgfuf3 };
