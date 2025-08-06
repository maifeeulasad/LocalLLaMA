import React, { lazy, Suspense } from 'react';

const Page1miytb3 = lazy(() => import('./Page'));

const LazyPage1miytb3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miytb3 />
  </Suspense>
);

export { LazyPage1miytb3 };
