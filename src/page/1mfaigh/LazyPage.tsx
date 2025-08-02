import React, { lazy, Suspense } from 'react';

const Page1mfaigh = lazy(() => import('./Page'));

const LazyPage1mfaigh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfaigh />
  </Suspense>
);

export { LazyPage1mfaigh };
