import React, { lazy, Suspense } from 'react';

const Page1mi4q4o = lazy(() => import('./Page'));

const LazyPage1mi4q4o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi4q4o />
  </Suspense>
);

export { LazyPage1mi4q4o };
