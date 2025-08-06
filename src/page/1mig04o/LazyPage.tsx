import React, { lazy, Suspense } from 'react';

const Page1mig04o = lazy(() => import('./Page'));

const LazyPage1mig04o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mig04o />
  </Suspense>
);

export { LazyPage1mig04o };
