import React, { lazy, Suspense } from 'react';

const Page1milfbi = lazy(() => import('./Page'));

const LazyPage1milfbi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milfbi />
  </Suspense>
);

export { LazyPage1milfbi };
