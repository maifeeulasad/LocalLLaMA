import React, { lazy, Suspense } from 'react';

const Page1jsampe = lazy(() => import('./Page'));

const LazyPage1jsampe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jsampe />
  </Suspense>
);

export { LazyPage1jsampe };
