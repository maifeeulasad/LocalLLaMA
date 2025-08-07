import React, { lazy, Suspense } from 'react';

const Page1mj6uix = lazy(() => import('./Page'));

const LazyPage1mj6uix = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj6uix />
  </Suspense>
);

export { LazyPage1mj6uix };
