import React, { lazy, Suspense } from 'react';

const Page1mh358z = lazy(() => import('./Page'));

const LazyPage1mh358z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh358z />
  </Suspense>
);

export { LazyPage1mh358z };
