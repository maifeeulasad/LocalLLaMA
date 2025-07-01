import React, { lazy, Suspense } from 'react';

const Page1loyc9x = lazy(() => import('./Page'));

const LazyPage1loyc9x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loyc9x />
  </Suspense>
);

export { LazyPage1loyc9x };
