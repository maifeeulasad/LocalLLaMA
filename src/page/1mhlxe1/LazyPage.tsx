import React, { lazy, Suspense } from 'react';

const Page1mhlxe1 = lazy(() => import('./Page'));

const LazyPage1mhlxe1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhlxe1 />
  </Suspense>
);

export { LazyPage1mhlxe1 };
