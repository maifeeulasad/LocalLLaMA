import React, { lazy, Suspense } from 'react';

const Page1mifzqz = lazy(() => import('./Page'));

const LazyPage1mifzqz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mifzqz />
  </Suspense>
);

export { LazyPage1mifzqz };
