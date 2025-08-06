import React, { lazy, Suspense } from 'react';

const Page1mirfzi = lazy(() => import('./Page'));

const LazyPage1mirfzi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mirfzi />
  </Suspense>
);

export { LazyPage1mirfzi };
