import React, { lazy, Suspense } from 'react';

const Page1mj75hi = lazy(() => import('./Page'));

const LazyPage1mj75hi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj75hi />
  </Suspense>
);

export { LazyPage1mj75hi };
