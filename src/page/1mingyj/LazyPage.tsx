import React, { lazy, Suspense } from 'react';

const Page1mingyj = lazy(() => import('./Page'));

const LazyPage1mingyj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mingyj />
  </Suspense>
);

export { LazyPage1mingyj };
