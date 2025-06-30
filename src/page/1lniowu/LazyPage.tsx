import React, { lazy, Suspense } from 'react';

const Page1lniowu = lazy(() => import('./Page'));

const LazyPage1lniowu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lniowu />
  </Suspense>
);

export { LazyPage1lniowu };
