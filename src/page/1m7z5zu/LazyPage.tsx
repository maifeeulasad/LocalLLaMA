import React, { lazy, Suspense } from 'react';

const Page1m7z5zu = lazy(() => import('./Page'));

const LazyPage1m7z5zu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7z5zu />
  </Suspense>
);

export { LazyPage1m7z5zu };
