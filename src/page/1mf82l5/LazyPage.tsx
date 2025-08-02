import React, { lazy, Suspense } from 'react';

const Page1mf82l5 = lazy(() => import('./Page'));

const LazyPage1mf82l5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf82l5 />
  </Suspense>
);

export { LazyPage1mf82l5 };
