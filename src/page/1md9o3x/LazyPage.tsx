import React, { lazy, Suspense } from 'react';

const Page1md9o3x = lazy(() => import('./Page'));

const LazyPage1md9o3x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md9o3x />
  </Suspense>
);

export { LazyPage1md9o3x };
