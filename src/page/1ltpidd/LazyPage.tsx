import React, { lazy, Suspense } from 'react';

const Page1ltpidd = lazy(() => import('./Page'));

const LazyPage1ltpidd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltpidd />
  </Suspense>
);

export { LazyPage1ltpidd };
