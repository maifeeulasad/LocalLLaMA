import React, { lazy, Suspense } from 'react';

const Page1mj8p54 = lazy(() => import('./Page'));

const LazyPage1mj8p54 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj8p54 />
  </Suspense>
);

export { LazyPage1mj8p54 };
