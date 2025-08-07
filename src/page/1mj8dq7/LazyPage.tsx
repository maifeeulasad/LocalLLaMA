import React, { lazy, Suspense } from 'react';

const Page1mj8dq7 = lazy(() => import('./Page'));

const LazyPage1mj8dq7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj8dq7 />
  </Suspense>
);

export { LazyPage1mj8dq7 };
