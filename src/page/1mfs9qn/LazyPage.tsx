import React, { lazy, Suspense } from 'react';

const Page1mfs9qn = lazy(() => import('./Page'));

const LazyPage1mfs9qn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfs9qn />
  </Suspense>
);

export { LazyPage1mfs9qn };
