import React, { lazy, Suspense } from 'react';

const Page1mh99hu = lazy(() => import('./Page'));

const LazyPage1mh99hu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh99hu />
  </Suspense>
);

export { LazyPage1mh99hu };
