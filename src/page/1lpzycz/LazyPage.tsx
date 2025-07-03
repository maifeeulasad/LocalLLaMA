import React, { lazy, Suspense } from 'react';

const Page1lpzycz = lazy(() => import('./Page'));

const LazyPage1lpzycz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpzycz />
  </Suspense>
);

export { LazyPage1lpzycz };
