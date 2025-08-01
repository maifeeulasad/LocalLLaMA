import React, { lazy, Suspense } from 'react';

const Page1me6j2v = lazy(() => import('./Page'));

const LazyPage1me6j2v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me6j2v />
  </Suspense>
);

export { LazyPage1me6j2v };
