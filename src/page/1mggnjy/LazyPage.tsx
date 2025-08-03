import React, { lazy, Suspense } from 'react';

const Page1mggnjy = lazy(() => import('./Page'));

const LazyPage1mggnjy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mggnjy />
  </Suspense>
);

export { LazyPage1mggnjy };
