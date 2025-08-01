import React, { lazy, Suspense } from 'react';

const Page1me44dy = lazy(() => import('./Page'));

const LazyPage1me44dy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me44dy />
  </Suspense>
);

export { LazyPage1me44dy };
