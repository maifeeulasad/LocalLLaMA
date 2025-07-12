import React, { lazy, Suspense } from 'react';

const Page1lx3p4i = lazy(() => import('./Page'));

const LazyPage1lx3p4i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx3p4i />
  </Suspense>
);

export { LazyPage1lx3p4i };
