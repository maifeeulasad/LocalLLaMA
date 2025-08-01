import React, { lazy, Suspense } from 'react';

const Page1mepzf6 = lazy(() => import('./Page'));

const LazyPage1mepzf6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mepzf6 />
  </Suspense>
);

export { LazyPage1mepzf6 };
