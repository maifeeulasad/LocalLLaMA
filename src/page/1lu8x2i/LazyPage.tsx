import React, { lazy, Suspense } from 'react';

const Page1lu8x2i = lazy(() => import('./Page'));

const LazyPage1lu8x2i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu8x2i />
  </Suspense>
);

export { LazyPage1lu8x2i };
