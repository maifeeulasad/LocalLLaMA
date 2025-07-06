import React, { lazy, Suspense } from 'react';

const Page1lsju4i = lazy(() => import('./Page'));

const LazyPage1lsju4i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsju4i />
  </Suspense>
);

export { LazyPage1lsju4i };
