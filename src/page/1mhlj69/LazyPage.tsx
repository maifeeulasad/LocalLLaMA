import React, { lazy, Suspense } from 'react';

const Page1mhlj69 = lazy(() => import('./Page'));

const LazyPage1mhlj69 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhlj69 />
  </Suspense>
);

export { LazyPage1mhlj69 };
