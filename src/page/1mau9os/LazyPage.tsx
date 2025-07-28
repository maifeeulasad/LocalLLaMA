import React, { lazy, Suspense } from 'react';

const Page1mau9os = lazy(() => import('./Page'));

const LazyPage1mau9os = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mau9os />
  </Suspense>
);

export { LazyPage1mau9os };
