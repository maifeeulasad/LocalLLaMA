import React, { lazy, Suspense } from 'react';

const Page1m8qj9w = lazy(() => import('./Page'));

const LazyPage1m8qj9w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8qj9w />
  </Suspense>
);

export { LazyPage1m8qj9w };
