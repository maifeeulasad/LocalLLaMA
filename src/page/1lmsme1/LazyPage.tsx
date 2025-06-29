import React, { lazy, Suspense } from 'react';

const Page1lmsme1 = lazy(() => import('./Page'));

const LazyPage1lmsme1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmsme1 />
  </Suspense>
);

export { LazyPage1lmsme1 };
