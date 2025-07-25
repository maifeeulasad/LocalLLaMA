import React, { lazy, Suspense } from 'react';

const Page1m88jdh = lazy(() => import('./Page'));

const LazyPage1m88jdh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m88jdh />
  </Suspense>
);

export { LazyPage1m88jdh };
