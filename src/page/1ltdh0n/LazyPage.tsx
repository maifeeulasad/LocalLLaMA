import React, { lazy, Suspense } from 'react';

const Page1ltdh0n = lazy(() => import('./Page'));

const LazyPage1ltdh0n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltdh0n />
  </Suspense>
);

export { LazyPage1ltdh0n };
