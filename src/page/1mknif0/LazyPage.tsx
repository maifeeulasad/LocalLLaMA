import React, { lazy, Suspense } from 'react';

const Page1mknif0 = lazy(() => import('./Page'));

const LazyPage1mknif0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mknif0 />
  </Suspense>
);

export { LazyPage1mknif0 };
