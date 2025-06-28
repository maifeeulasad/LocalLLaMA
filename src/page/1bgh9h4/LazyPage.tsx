import React, { lazy, Suspense } from 'react';

const Page1bgh9h4 = lazy(() => import('./Page'));

const LazyPage1bgh9h4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1bgh9h4 />
  </Suspense>
);

export { LazyPage1bgh9h4 };
