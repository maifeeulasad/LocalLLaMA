import React, { lazy, Suspense } from 'react';

const Page1miy4bu = lazy(() => import('./Page'));

const LazyPage1miy4bu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miy4bu />
  </Suspense>
);

export { LazyPage1miy4bu };
