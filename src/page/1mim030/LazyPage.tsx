import React, { lazy, Suspense } from 'react';

const Page1mim030 = lazy(() => import('./Page'));

const LazyPage1mim030 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mim030 />
  </Suspense>
);

export { LazyPage1mim030 };
