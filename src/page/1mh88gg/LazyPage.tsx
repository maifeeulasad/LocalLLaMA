import React, { lazy, Suspense } from 'react';

const Page1mh88gg = lazy(() => import('./Page'));

const LazyPage1mh88gg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh88gg />
  </Suspense>
);

export { LazyPage1mh88gg };
