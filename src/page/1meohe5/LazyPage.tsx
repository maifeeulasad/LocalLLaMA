import React, { lazy, Suspense } from 'react';

const Page1meohe5 = lazy(() => import('./Page'));

const LazyPage1meohe5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meohe5 />
  </Suspense>
);

export { LazyPage1meohe5 };
