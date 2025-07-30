import React, { lazy, Suspense } from 'react';

const Page1mci1dy = lazy(() => import('./Page'));

const LazyPage1mci1dy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mci1dy />
  </Suspense>
);

export { LazyPage1mci1dy };
