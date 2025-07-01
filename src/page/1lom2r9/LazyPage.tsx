import React, { lazy, Suspense } from 'react';

const Page1lom2r9 = lazy(() => import('./Page'));

const LazyPage1lom2r9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lom2r9 />
  </Suspense>
);

export { LazyPage1lom2r9 };
