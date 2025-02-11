import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import '../../../apps/portfolio/src/styles.css'
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <HeroUIProvider>
        <Story/>
      </HeroUIProvider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;