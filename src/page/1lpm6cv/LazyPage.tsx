import React, { lazy, Suspense } from 'react';

const Page1lpm6cv = lazy(() => import('./Page'));

const LazyPage1lpm6cv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpm6cv />
  </Suspense>
);

export { LazyPage1lpm6cv };
