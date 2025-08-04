import React, { lazy, Suspense } from 'react';

const Page1mgt2om = lazy(() => import('./Page'));

const LazyPage1mgt2om = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgt2om />
  </Suspense>
);

export { LazyPage1mgt2om };
