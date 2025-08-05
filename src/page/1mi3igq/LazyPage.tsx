import React, { lazy, Suspense } from 'react';

const Page1mi3igq = lazy(() => import('./Page'));

const LazyPage1mi3igq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi3igq />
  </Suspense>
);

export { LazyPage1mi3igq };
