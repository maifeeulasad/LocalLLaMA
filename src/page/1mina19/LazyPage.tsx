import React, { lazy, Suspense } from 'react';

const Page1mina19 = lazy(() => import('./Page'));

const LazyPage1mina19 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mina19 />
  </Suspense>
);

export { LazyPage1mina19 };
