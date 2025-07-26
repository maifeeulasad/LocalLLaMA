import React, { lazy, Suspense } from 'react';

const Page1m91mt6 = lazy(() => import('./Page'));

const LazyPage1m91mt6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m91mt6 />
  </Suspense>
);

export { LazyPage1m91mt6 };
