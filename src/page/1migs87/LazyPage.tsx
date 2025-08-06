import React, { lazy, Suspense } from 'react';

const Page1migs87 = lazy(() => import('./Page'));

const LazyPage1migs87 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1migs87 />
  </Suspense>
);

export { LazyPage1migs87 };
