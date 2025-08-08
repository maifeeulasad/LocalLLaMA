import React, { lazy, Suspense } from 'react';

const Page1mk0w9f = lazy(() => import('./Page'));

const LazyPage1mk0w9f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk0w9f />
  </Suspense>
);

export { LazyPage1mk0w9f };
