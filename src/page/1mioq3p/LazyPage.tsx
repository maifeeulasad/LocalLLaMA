import React, { lazy, Suspense } from 'react';

const Page1mioq3p = lazy(() => import('./Page'));

const LazyPage1mioq3p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mioq3p />
  </Suspense>
);

export { LazyPage1mioq3p };
