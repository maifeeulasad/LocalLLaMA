import React, { lazy, Suspense } from 'react';

const Page1m8qr9q = lazy(() => import('./Page'));

const LazyPage1m8qr9q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8qr9q />
  </Suspense>
);

export { LazyPage1m8qr9q };
