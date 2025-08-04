import React, { lazy, Suspense } from 'react';

const Page1mgtrvz = lazy(() => import('./Page'));

const LazyPage1mgtrvz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgtrvz />
  </Suspense>
);

export { LazyPage1mgtrvz };
