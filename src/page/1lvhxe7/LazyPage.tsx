import React, { lazy, Suspense } from 'react';

const Page1lvhxe7 = lazy(() => import('./Page'));

const LazyPage1lvhxe7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvhxe7 />
  </Suspense>
);

export { LazyPage1lvhxe7 };
