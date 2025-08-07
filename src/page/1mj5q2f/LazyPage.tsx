import React, { lazy, Suspense } from 'react';

const Page1mj5q2f = lazy(() => import('./Page'));

const LazyPage1mj5q2f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj5q2f />
  </Suspense>
);

export { LazyPage1mj5q2f };
