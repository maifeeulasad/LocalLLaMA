import React, { lazy, Suspense } from 'react';

const Page1mafyyp = lazy(() => import('./Page'));

const LazyPage1mafyyp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mafyyp />
  </Suspense>
);

export { LazyPage1mafyyp };
