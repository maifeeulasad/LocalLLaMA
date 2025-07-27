import React, { lazy, Suspense } from 'react';

const Page1makqv4 = lazy(() => import('./Page'));

const LazyPage1makqv4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1makqv4 />
  </Suspense>
);

export { LazyPage1makqv4 };
