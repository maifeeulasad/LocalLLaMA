import React, { lazy, Suspense } from 'react';

const Page1lvne34 = lazy(() => import('./Page'));

const LazyPage1lvne34 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvne34 />
  </Suspense>
);

export { LazyPage1lvne34 };
