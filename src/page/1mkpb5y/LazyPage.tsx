import React, { lazy, Suspense } from 'react';

const Page1mkpb5y = lazy(() => import('./Page'));

const LazyPage1mkpb5y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkpb5y />
  </Suspense>
);

export { LazyPage1mkpb5y };
