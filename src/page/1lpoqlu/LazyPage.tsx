import React, { lazy, Suspense } from 'react';

const Page1lpoqlu = lazy(() => import('./Page'));

const LazyPage1lpoqlu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpoqlu />
  </Suspense>
);

export { LazyPage1lpoqlu };
