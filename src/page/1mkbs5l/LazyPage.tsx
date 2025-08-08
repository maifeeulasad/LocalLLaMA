import React, { lazy, Suspense } from 'react';

const Page1mkbs5l = lazy(() => import('./Page'));

const LazyPage1mkbs5l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkbs5l />
  </Suspense>
);

export { LazyPage1mkbs5l };
