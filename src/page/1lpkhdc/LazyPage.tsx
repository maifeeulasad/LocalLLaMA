import React, { lazy, Suspense } from 'react';

const Page1lpkhdc = lazy(() => import('./Page'));

const LazyPage1lpkhdc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpkhdc />
  </Suspense>
);

export { LazyPage1lpkhdc };
