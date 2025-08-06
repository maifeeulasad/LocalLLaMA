import React, { lazy, Suspense } from 'react';

const Page1mj1nym = lazy(() => import('./Page'));

const LazyPage1mj1nym = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj1nym />
  </Suspense>
);

export { LazyPage1mj1nym };
