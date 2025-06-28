import React, { lazy, Suspense } from 'react';

const Page1idseqb = lazy(() => import('./Page'));

const LazyPage1idseqb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1idseqb />
  </Suspense>
);

export { LazyPage1idseqb };
