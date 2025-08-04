import React, { lazy, Suspense } from 'react';

const Page1mh9uha = lazy(() => import('./Page'));

const LazyPage1mh9uha = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh9uha />
  </Suspense>
);

export { LazyPage1mh9uha };
