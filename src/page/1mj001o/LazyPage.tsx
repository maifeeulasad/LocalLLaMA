import React, { lazy, Suspense } from 'react';

const Page1mj001o = lazy(() => import('./Page'));

const LazyPage1mj001o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj001o />
  </Suspense>
);

export { LazyPage1mj001o };
