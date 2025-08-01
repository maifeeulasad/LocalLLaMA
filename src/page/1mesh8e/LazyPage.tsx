import React, { lazy, Suspense } from 'react';

const Page1mesh8e = lazy(() => import('./Page'));

const LazyPage1mesh8e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mesh8e />
  </Suspense>
);

export { LazyPage1mesh8e };
