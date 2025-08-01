import React, { lazy, Suspense } from 'react';

const Page1melltk = lazy(() => import('./Page'));

const LazyPage1melltk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1melltk />
  </Suspense>
);

export { LazyPage1melltk };
