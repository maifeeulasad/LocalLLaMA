import React, { lazy, Suspense } from 'react';

const Page1mf8um1 = lazy(() => import('./Page'));

const LazyPage1mf8um1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf8um1 />
  </Suspense>
);

export { LazyPage1mf8um1 };
