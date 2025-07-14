import React, { lazy, Suspense } from 'react';

const Page1lza5bu = lazy(() => import('./Page'));

const LazyPage1lza5bu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lza5bu />
  </Suspense>
);

export { LazyPage1lza5bu };
