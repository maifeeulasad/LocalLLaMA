import React, { lazy, Suspense } from 'react';

const Page1m91b98 = lazy(() => import('./Page'));

const LazyPage1m91b98 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m91b98 />
  </Suspense>
);

export { LazyPage1m91b98 };
