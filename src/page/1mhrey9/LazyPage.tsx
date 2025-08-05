import React, { lazy, Suspense } from 'react';

const Page1mhrey9 = lazy(() => import('./Page'));

const LazyPage1mhrey9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhrey9 />
  </Suspense>
);

export { LazyPage1mhrey9 };
