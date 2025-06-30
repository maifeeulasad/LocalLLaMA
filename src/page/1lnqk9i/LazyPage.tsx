import React, { lazy, Suspense } from 'react';

const Page1lnqk9i = lazy(() => import('./Page'));

const LazyPage1lnqk9i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnqk9i />
  </Suspense>
);

export { LazyPage1lnqk9i };
