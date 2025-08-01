import React, { lazy, Suspense } from 'react';

const Page1me7jed = lazy(() => import('./Page'));

const LazyPage1me7jed = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me7jed />
  </Suspense>
);

export { LazyPage1me7jed };
