import React, { lazy, Suspense } from 'react';

const Page1mijfyz = lazy(() => import('./Page'));

const LazyPage1mijfyz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijfyz />
  </Suspense>
);

export { LazyPage1mijfyz };
