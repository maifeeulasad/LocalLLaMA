import React, { lazy, Suspense } from 'react';

const Page1mkefbx = lazy(() => import('./Page'));

const LazyPage1mkefbx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkefbx />
  </Suspense>
);

export { LazyPage1mkefbx };
