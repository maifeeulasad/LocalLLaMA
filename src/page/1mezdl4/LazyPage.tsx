import React, { lazy, Suspense } from 'react';

const Page1mezdl4 = lazy(() => import('./Page'));

const LazyPage1mezdl4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mezdl4 />
  </Suspense>
);

export { LazyPage1mezdl4 };
