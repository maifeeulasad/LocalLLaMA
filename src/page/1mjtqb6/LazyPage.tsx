import React, { lazy, Suspense } from 'react';

const Page1mjtqb6 = lazy(() => import('./Page'));

const LazyPage1mjtqb6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjtqb6 />
  </Suspense>
);

export { LazyPage1mjtqb6 };
