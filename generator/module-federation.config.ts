import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'generator',
  exposes: {
    './Routes': 'generator/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
