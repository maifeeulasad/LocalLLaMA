import React, { lazy, Suspense } from 'react';

const Page1mkay0s = lazy(() => import('./Page'));

const LazyPage1mkay0s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkay0s />
  </Suspense>
);

export { LazyPage1mkay0s };
