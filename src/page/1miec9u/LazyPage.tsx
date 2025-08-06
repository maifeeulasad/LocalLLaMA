import React, { lazy, Suspense } from 'react';

const Page1miec9u = lazy(() => import('./Page'));

const LazyPage1miec9u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miec9u />
  </Suspense>
);

export { LazyPage1miec9u };
