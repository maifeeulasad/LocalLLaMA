import React, { lazy, Suspense } from 'react';

const Page1lraotq = lazy(() => import('./Page'));

const LazyPage1lraotq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lraotq />
  </Suspense>
);

export { LazyPage1lraotq };
