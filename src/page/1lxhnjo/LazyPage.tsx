import React, { lazy, Suspense } from 'react';

const Page1lxhnjo = lazy(() => import('./Page'));

const LazyPage1lxhnjo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxhnjo />
  </Suspense>
);

export { LazyPage1lxhnjo };
