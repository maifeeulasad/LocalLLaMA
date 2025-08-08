import React, { lazy, Suspense } from 'react';

const Page1mk8e0f = lazy(() => import('./Page'));

const LazyPage1mk8e0f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk8e0f />
  </Suspense>
);

export { LazyPage1mk8e0f };
