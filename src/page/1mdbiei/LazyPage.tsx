import React, { lazy, Suspense } from 'react';

const Page1mdbiei = lazy(() => import('./Page'));

const LazyPage1mdbiei = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdbiei />
  </Suspense>
);

export { LazyPage1mdbiei };
