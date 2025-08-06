import React, { lazy, Suspense } from 'react';

const Page1miw83f = lazy(() => import('./Page'));

const LazyPage1miw83f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miw83f />
  </Suspense>
);

export { LazyPage1miw83f };
