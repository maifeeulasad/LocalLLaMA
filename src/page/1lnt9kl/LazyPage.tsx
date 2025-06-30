import React, { lazy, Suspense } from 'react';

const Page1lnt9kl = lazy(() => import('./Page'));

const LazyPage1lnt9kl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnt9kl />
  </Suspense>
);

export { LazyPage1lnt9kl };
