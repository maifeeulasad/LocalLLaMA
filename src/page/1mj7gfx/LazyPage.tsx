import React, { lazy, Suspense } from 'react';

const Page1mj7gfx = lazy(() => import('./Page'));

const LazyPage1mj7gfx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj7gfx />
  </Suspense>
);

export { LazyPage1mj7gfx };
