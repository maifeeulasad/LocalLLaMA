import React, { lazy, Suspense } from 'react';

const Page1m7u02i = lazy(() => import('./Page'));

const LazyPage1m7u02i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7u02i />
  </Suspense>
);

export { LazyPage1m7u02i };
