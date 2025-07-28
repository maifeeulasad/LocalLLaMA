import React, { lazy, Suspense } from 'react';

const Page1mb6rre = lazy(() => import('./Page'));

const LazyPage1mb6rre = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb6rre />
  </Suspense>
);

export { LazyPage1mb6rre };
