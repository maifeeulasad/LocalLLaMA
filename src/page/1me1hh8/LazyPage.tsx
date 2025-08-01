import React, { lazy, Suspense } from 'react';

const Page1me1hh8 = lazy(() => import('./Page'));

const LazyPage1me1hh8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me1hh8 />
  </Suspense>
);

export { LazyPage1me1hh8 };
