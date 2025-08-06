import React, { lazy, Suspense } from 'react';

const Page1mj20c7 = lazy(() => import('./Page'));

const LazyPage1mj20c7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj20c7 />
  </Suspense>
);

export { LazyPage1mj20c7 };
