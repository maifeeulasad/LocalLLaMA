import React, { lazy, Suspense } from 'react';

const Page1mdw7v7 = lazy(() => import('./Page'));

const LazyPage1mdw7v7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdw7v7 />
  </Suspense>
);

export { LazyPage1mdw7v7 };
