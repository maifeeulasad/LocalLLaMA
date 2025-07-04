import React, { lazy, Suspense } from 'react';

const Page1lr0i8p = lazy(() => import('./Page'));

const LazyPage1lr0i8p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr0i8p />
  </Suspense>
);

export { LazyPage1lr0i8p };
