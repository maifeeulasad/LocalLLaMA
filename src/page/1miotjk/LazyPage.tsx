import React, { lazy, Suspense } from 'react';

const Page1miotjk = lazy(() => import('./Page'));

const LazyPage1miotjk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miotjk />
  </Suspense>
);

export { LazyPage1miotjk };
