import React, { lazy, Suspense } from 'react';

const Page1mioj8f = lazy(() => import('./Page'));

const LazyPage1mioj8f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mioj8f />
  </Suspense>
);

export { LazyPage1mioj8f };
