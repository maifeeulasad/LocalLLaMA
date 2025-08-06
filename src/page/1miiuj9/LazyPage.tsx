import React, { lazy, Suspense } from 'react';

const Page1miiuj9 = lazy(() => import('./Page'));

const LazyPage1miiuj9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miiuj9 />
  </Suspense>
);

export { LazyPage1miiuj9 };
