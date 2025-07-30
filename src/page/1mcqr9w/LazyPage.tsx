import React, { lazy, Suspense } from 'react';

const Page1mcqr9w = lazy(() => import('./Page'));

const LazyPage1mcqr9w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcqr9w />
  </Suspense>
);

export { LazyPage1mcqr9w };
