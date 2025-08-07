import React, { lazy, Suspense } from 'react';

const Page1mj8skn = lazy(() => import('./Page'));

const LazyPage1mj8skn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj8skn />
  </Suspense>
);

export { LazyPage1mj8skn };
