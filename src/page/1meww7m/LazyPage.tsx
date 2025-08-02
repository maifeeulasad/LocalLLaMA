import React, { lazy, Suspense } from 'react';

const Page1meww7m = lazy(() => import('./Page'));

const LazyPage1meww7m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meww7m />
  </Suspense>
);

export { LazyPage1meww7m };
