import React, { lazy, Suspense } from 'react';

const Page1miozqy = lazy(() => import('./Page'));

const LazyPage1miozqy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miozqy />
  </Suspense>
);

export { LazyPage1miozqy };
