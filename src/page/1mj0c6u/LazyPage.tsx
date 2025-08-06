import React, { lazy, Suspense } from 'react';

const Page1mj0c6u = lazy(() => import('./Page'));

const LazyPage1mj0c6u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj0c6u />
  </Suspense>
);

export { LazyPage1mj0c6u };
