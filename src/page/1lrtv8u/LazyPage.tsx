import React, { lazy, Suspense } from 'react';

const Page1lrtv8u = lazy(() => import('./Page'));

const LazyPage1lrtv8u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrtv8u />
  </Suspense>
);

export { LazyPage1lrtv8u };
