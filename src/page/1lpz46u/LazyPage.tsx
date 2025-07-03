import React, { lazy, Suspense } from 'react';

const Page1lpz46u = lazy(() => import('./Page'));

const LazyPage1lpz46u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpz46u />
  </Suspense>
);

export { LazyPage1lpz46u };
