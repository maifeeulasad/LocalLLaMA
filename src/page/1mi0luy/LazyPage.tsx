import React, { lazy, Suspense } from 'react';

const Page1mi0luy = lazy(() => import('./Page'));

const LazyPage1mi0luy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi0luy />
  </Suspense>
);

export { LazyPage1mi0luy };
