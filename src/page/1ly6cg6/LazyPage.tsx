import React, { lazy, Suspense } from 'react';

const Page1ly6cg6 = lazy(() => import('./Page'));

const LazyPage1ly6cg6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly6cg6 />
  </Suspense>
);

export { LazyPage1ly6cg6 };
