import React, { lazy, Suspense } from 'react';

const Page1ltmrag = lazy(() => import('./Page'));

const LazyPage1ltmrag = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltmrag />
  </Suspense>
);

export { LazyPage1ltmrag };
