import React, { lazy, Suspense } from 'react';

const Page1mk74wq = lazy(() => import('./Page'));

const LazyPage1mk74wq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk74wq />
  </Suspense>
);

export { LazyPage1mk74wq };
