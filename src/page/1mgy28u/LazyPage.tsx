import React, { lazy, Suspense } from 'react';

const Page1mgy28u = lazy(() => import('./Page'));

const LazyPage1mgy28u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgy28u />
  </Suspense>
);

export { LazyPage1mgy28u };
