import React, { lazy, Suspense } from 'react';

const Page1miz0r1 = lazy(() => import('./Page'));

const LazyPage1miz0r1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miz0r1 />
  </Suspense>
);

export { LazyPage1miz0r1 };
