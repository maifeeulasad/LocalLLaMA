import React, { lazy, Suspense } from 'react';

const Page1mi7pei = lazy(() => import('./Page'));

const LazyPage1mi7pei = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi7pei />
  </Suspense>
);

export { LazyPage1mi7pei };
