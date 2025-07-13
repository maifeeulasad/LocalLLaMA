import React, { lazy, Suspense } from 'react';

const Page1ly983h = lazy(() => import('./Page'));

const LazyPage1ly983h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly983h />
  </Suspense>
);

export { LazyPage1ly983h };
