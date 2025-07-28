import React, { lazy, Suspense } from 'react';

const Page1mbefh4 = lazy(() => import('./Page'));

const LazyPage1mbefh4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbefh4 />
  </Suspense>
);

export { LazyPage1mbefh4 };
