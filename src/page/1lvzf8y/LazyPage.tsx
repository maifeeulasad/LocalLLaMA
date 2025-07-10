import React, { lazy, Suspense } from 'react';

const Page1lvzf8y = lazy(() => import('./Page'));

const LazyPage1lvzf8y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvzf8y />
  </Suspense>
);

export { LazyPage1lvzf8y };
