import React, { lazy, Suspense } from 'react';

const Page1m9cg16 = lazy(() => import('./Page'));

const LazyPage1m9cg16 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9cg16 />
  </Suspense>
);

export { LazyPage1m9cg16 };
