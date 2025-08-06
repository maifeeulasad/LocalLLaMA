import React, { lazy, Suspense } from 'react';

const Page1milf6u = lazy(() => import('./Page'));

const LazyPage1milf6u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milf6u />
  </Suspense>
);

export { LazyPage1milf6u };
