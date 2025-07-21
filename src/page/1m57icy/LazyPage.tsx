import React, { lazy, Suspense } from 'react';

const Page1m57icy = lazy(() => import('./Page'));

const LazyPage1m57icy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m57icy />
  </Suspense>
);

export { LazyPage1m57icy };
