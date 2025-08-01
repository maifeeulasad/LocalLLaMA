import React, { lazy, Suspense } from 'react';

const Page1me2z8b = lazy(() => import('./Page'));

const LazyPage1me2z8b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me2z8b />
  </Suspense>
);

export { LazyPage1me2z8b };
