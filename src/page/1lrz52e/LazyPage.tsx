import React, { lazy, Suspense } from 'react';

const Page1lrz52e = lazy(() => import('./Page'));

const LazyPage1lrz52e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrz52e />
  </Suspense>
);

export { LazyPage1lrz52e };
