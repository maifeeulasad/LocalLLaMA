import React, { lazy, Suspense } from 'react';

const Page1mj32ra = lazy(() => import('./Page'));

const LazyPage1mj32ra = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj32ra />
  </Suspense>
);

export { LazyPage1mj32ra };
