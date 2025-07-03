import React, { lazy, Suspense } from 'react';

const Page1lpw26d = lazy(() => import('./Page'));

const LazyPage1lpw26d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpw26d />
  </Suspense>
);

export { LazyPage1lpw26d };
