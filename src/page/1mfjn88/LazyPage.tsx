import React, { lazy, Suspense } from 'react';

const Page1mfjn88 = lazy(() => import('./Page'));

const LazyPage1mfjn88 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfjn88 />
  </Suspense>
);

export { LazyPage1mfjn88 };
