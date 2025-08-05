import React, { lazy, Suspense } from 'react';

const Page1mhhbrr = lazy(() => import('./Page'));

const LazyPage1mhhbrr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhhbrr />
  </Suspense>
);

export { LazyPage1mhhbrr };
