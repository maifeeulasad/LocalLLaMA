import React, { lazy, Suspense } from 'react';

const Page1mj97vh = lazy(() => import('./Page'));

const LazyPage1mj97vh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj97vh />
  </Suspense>
);

export { LazyPage1mj97vh };
