import React, { lazy, Suspense } from 'react';

const Page1lx66on = lazy(() => import('./Page'));

const LazyPage1lx66on = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx66on />
  </Suspense>
);

export { LazyPage1lx66on };
