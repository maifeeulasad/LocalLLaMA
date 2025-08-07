import React, { lazy, Suspense } from 'react';

const Page1mj4zkk = lazy(() => import('./Page'));

const LazyPage1mj4zkk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj4zkk />
  </Suspense>
);

export { LazyPage1mj4zkk };
