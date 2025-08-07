import React, { lazy, Suspense } from 'react';

const Page1mj6krv = lazy(() => import('./Page'));

const LazyPage1mj6krv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj6krv />
  </Suspense>
);

export { LazyPage1mj6krv };
