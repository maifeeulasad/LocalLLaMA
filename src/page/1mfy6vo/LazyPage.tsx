import React, { lazy, Suspense } from 'react';

const Page1mfy6vo = lazy(() => import('./Page'));

const LazyPage1mfy6vo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfy6vo />
  </Suspense>
);

export { LazyPage1mfy6vo };
