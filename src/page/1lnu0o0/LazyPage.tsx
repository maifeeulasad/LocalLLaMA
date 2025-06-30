import React, { lazy, Suspense } from 'react';

const Page1lnu0o0 = lazy(() => import('./Page'));

const LazyPage1lnu0o0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnu0o0 />
  </Suspense>
);

export { LazyPage1lnu0o0 };
