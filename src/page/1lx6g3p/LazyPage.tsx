import React, { lazy, Suspense } from 'react';

const Page1lx6g3p = lazy(() => import('./Page'));

const LazyPage1lx6g3p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx6g3p />
  </Suspense>
);

export { LazyPage1lx6g3p };
