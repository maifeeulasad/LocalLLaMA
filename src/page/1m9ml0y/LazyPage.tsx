import React, { lazy, Suspense } from 'react';

const Page1m9ml0y = lazy(() => import('./Page'));

const LazyPage1m9ml0y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9ml0y />
  </Suspense>
);

export { LazyPage1m9ml0y };
