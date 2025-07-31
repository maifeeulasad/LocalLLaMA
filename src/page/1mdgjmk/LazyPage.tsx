import React, { lazy, Suspense } from 'react';

const Page1mdgjmk = lazy(() => import('./Page'));

const LazyPage1mdgjmk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdgjmk />
  </Suspense>
);

export { LazyPage1mdgjmk };
