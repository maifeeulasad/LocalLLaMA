import React, { lazy, Suspense } from 'react';

const Page1mgyp1z = lazy(() => import('./Page'));

const LazyPage1mgyp1z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgyp1z />
  </Suspense>
);

export { LazyPage1mgyp1z };
