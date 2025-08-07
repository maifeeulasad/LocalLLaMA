import React, { lazy, Suspense } from 'react';

const Page1mje4dm = lazy(() => import('./Page'));

const LazyPage1mje4dm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mje4dm />
  </Suspense>
);

export { LazyPage1mje4dm };
