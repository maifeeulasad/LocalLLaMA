import React, { lazy, Suspense } from 'react';

const Page1lybh8e = lazy(() => import('./Page'));

const LazyPage1lybh8e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lybh8e />
  </Suspense>
);

export { LazyPage1lybh8e };
