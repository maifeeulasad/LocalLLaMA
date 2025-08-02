import React, { lazy, Suspense } from 'react';

const Page1mfa5nv = lazy(() => import('./Page'));

const LazyPage1mfa5nv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfa5nv />
  </Suspense>
);

export { LazyPage1mfa5nv };
