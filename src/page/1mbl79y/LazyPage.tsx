import React, { lazy, Suspense } from 'react';

const Page1mbl79y = lazy(() => import('./Page'));

const LazyPage1mbl79y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbl79y />
  </Suspense>
);

export { LazyPage1mbl79y };
