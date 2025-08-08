import React, { lazy, Suspense } from 'react';

const Page1mkse3b = lazy(() => import('./Page'));

const LazyPage1mkse3b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkse3b />
  </Suspense>
);

export { LazyPage1mkse3b };
