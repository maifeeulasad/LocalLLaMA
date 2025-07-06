import React, { lazy, Suspense } from 'react';

const Page1lrskbk = lazy(() => import('./Page'));

const LazyPage1lrskbk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrskbk />
  </Suspense>
);

export { LazyPage1lrskbk };
