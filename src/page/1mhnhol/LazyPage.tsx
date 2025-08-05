import React, { lazy, Suspense } from 'react';

const Page1mhnhol = lazy(() => import('./Page'));

const LazyPage1mhnhol = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhnhol />
  </Suspense>
);

export { LazyPage1mhnhol };
