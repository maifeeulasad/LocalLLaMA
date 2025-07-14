import React, { lazy, Suspense } from 'react';

const Page1lzcuom = lazy(() => import('./Page'));

const LazyPage1lzcuom = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzcuom />
  </Suspense>
);

export { LazyPage1lzcuom };
