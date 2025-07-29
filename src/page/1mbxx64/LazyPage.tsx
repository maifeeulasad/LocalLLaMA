import React, { lazy, Suspense } from 'react';

const Page1mbxx64 = lazy(() => import('./Page'));

const LazyPage1mbxx64 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbxx64 />
  </Suspense>
);

export { LazyPage1mbxx64 };
