import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'shrimp-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      componentCorePackage: 'shrimp-components',
      proxiesFile: '../shrimp-components-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
