import React, { lazy, Suspense } from 'react';

const Page1miq7sp = lazy(() => import('./Page'));

const LazyPage1miq7sp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miq7sp />
  </Suspense>
);

export { LazyPage1miq7sp };
