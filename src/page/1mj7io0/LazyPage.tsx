import React, { lazy, Suspense } from 'react';

const Page1mj7io0 = lazy(() => import('./Page'));

const LazyPage1mj7io0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj7io0 />
  </Suspense>
);

export { LazyPage1mj7io0 };
