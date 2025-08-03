import React, { lazy, Suspense } from 'react';

const Page1mfy924 = lazy(() => import('./Page'));

const LazyPage1mfy924 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfy924 />
  </Suspense>
);

export { LazyPage1mfy924 };
