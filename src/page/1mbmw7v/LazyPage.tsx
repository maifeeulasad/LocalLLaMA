import React, { lazy, Suspense } from 'react';

const Page1mbmw7v = lazy(() => import('./Page'));

const LazyPage1mbmw7v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbmw7v />
  </Suspense>
);

export { LazyPage1mbmw7v };
