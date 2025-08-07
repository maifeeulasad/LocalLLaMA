import React, { lazy, Suspense } from 'react';

const Page1mj3wks = lazy(() => import('./Page'));

const LazyPage1mj3wks = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj3wks />
  </Suspense>
);

export { LazyPage1mj3wks };
