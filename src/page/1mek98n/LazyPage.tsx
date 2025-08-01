import React, { lazy, Suspense } from 'react';

const Page1mek98n = lazy(() => import('./Page'));

const LazyPage1mek98n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mek98n />
  </Suspense>
);

export { LazyPage1mek98n };
