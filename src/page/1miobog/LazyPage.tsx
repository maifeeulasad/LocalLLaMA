import React, { lazy, Suspense } from 'react';

const Page1miobog = lazy(() => import('./Page'));

const LazyPage1miobog = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miobog />
  </Suspense>
);

export { LazyPage1miobog };
