import React, { lazy, Suspense } from 'react';

const Page1ly02iv = lazy(() => import('./Page'));

const LazyPage1ly02iv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly02iv />
  </Suspense>
);

export { LazyPage1ly02iv };
