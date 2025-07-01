import React, { lazy, Suspense } from 'react';

const Page1lob0uu = lazy(() => import('./Page'));

const LazyPage1lob0uu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lob0uu />
  </Suspense>
);

export { LazyPage1lob0uu };
