import React, { lazy, Suspense } from 'react';

const Page1me324b = lazy(() => import('./Page'));

const LazyPage1me324b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me324b />
  </Suspense>
);

export { LazyPage1me324b };
