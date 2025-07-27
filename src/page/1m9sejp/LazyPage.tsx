import React, { lazy, Suspense } from 'react';

const Page1m9sejp = lazy(() => import('./Page'));

const LazyPage1m9sejp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9sejp />
  </Suspense>
);

export { LazyPage1m9sejp };
