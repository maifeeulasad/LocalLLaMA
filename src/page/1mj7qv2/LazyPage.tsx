import React, { lazy, Suspense } from 'react';

const Page1mj7qv2 = lazy(() => import('./Page'));

const LazyPage1mj7qv2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj7qv2 />
  </Suspense>
);

export { LazyPage1mj7qv2 };
