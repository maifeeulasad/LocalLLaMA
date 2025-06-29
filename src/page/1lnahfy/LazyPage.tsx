import React, { lazy, Suspense } from 'react';

const Page1lnahfy = lazy(() => import('./Page'));

const LazyPage1lnahfy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnahfy />
  </Suspense>
);

export { LazyPage1lnahfy };
