import React, { lazy, Suspense } from 'react';

const Page1luhpxa = lazy(() => import('./Page'));

const LazyPage1luhpxa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luhpxa />
  </Suspense>
);

export { LazyPage1luhpxa };
