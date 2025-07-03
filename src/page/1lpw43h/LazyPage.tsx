import React, { lazy, Suspense } from 'react';

const Page1lpw43h = lazy(() => import('./Page'));

const LazyPage1lpw43h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpw43h />
  </Suspense>
);

export { LazyPage1lpw43h };
