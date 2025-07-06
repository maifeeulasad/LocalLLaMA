import React, { lazy, Suspense } from 'react';

const Page1lssymd = lazy(() => import('./Page'));

const LazyPage1lssymd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lssymd />
  </Suspense>
);

export { LazyPage1lssymd };
