import React, { lazy, Suspense } from 'react';

const Page1mepz8z = lazy(() => import('./Page'));

const LazyPage1mepz8z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mepz8z />
  </Suspense>
);

export { LazyPage1mepz8z };
