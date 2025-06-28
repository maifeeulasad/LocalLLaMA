import React, { lazy, Suspense } from 'react';

const Page1jgqmlr = lazy(() => import('./Page'));

const LazyPage1jgqmlr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jgqmlr />
  </Suspense>
);

export { LazyPage1jgqmlr };
