import React, { lazy, Suspense } from 'react';

const Page1mgt5bx = lazy(() => import('./Page'));

const LazyPage1mgt5bx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgt5bx />
  </Suspense>
);

export { LazyPage1mgt5bx };
