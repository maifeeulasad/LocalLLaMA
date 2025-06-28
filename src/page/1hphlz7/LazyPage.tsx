import React, { lazy, Suspense } from 'react';

const Page1hphlz7 = lazy(() => import('./Page'));

const LazyPage1hphlz7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1hphlz7 />
  </Suspense>
);

export { LazyPage1hphlz7 };
