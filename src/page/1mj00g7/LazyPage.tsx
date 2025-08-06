import React, { lazy, Suspense } from 'react';

const Page1mj00g7 = lazy(() => import('./Page'));

const LazyPage1mj00g7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj00g7 />
  </Suspense>
);

export { LazyPage1mj00g7 };
