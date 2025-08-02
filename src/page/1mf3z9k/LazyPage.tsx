import React, { lazy, Suspense } from 'react';

const Page1mf3z9k = lazy(() => import('./Page'));

const LazyPage1mf3z9k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf3z9k />
  </Suspense>
);

export { LazyPage1mf3z9k };
