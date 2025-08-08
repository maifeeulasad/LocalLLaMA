import React, { lazy, Suspense } from 'react';

const Page1mkcwiv = lazy(() => import('./Page'));

const LazyPage1mkcwiv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkcwiv />
  </Suspense>
);

export { LazyPage1mkcwiv };
