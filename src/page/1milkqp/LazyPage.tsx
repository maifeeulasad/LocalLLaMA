import React, { lazy, Suspense } from 'react';

const Page1milkqp = lazy(() => import('./Page'));

const LazyPage1milkqp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milkqp />
  </Suspense>
);

export { LazyPage1milkqp };
