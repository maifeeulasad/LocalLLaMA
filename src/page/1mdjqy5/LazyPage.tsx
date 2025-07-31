import React, { lazy, Suspense } from 'react';

const Page1mdjqy5 = lazy(() => import('./Page'));

const LazyPage1mdjqy5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdjqy5 />
  </Suspense>
);

export { LazyPage1mdjqy5 };
