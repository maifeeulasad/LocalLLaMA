import React, { lazy, Suspense } from 'react';

const Page1mj74o6 = lazy(() => import('./Page'));

const LazyPage1mj74o6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj74o6 />
  </Suspense>
);

export { LazyPage1mj74o6 };
