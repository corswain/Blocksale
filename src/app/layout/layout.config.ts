import { FuseConfig } from '@fuse/types';

/**
 * Default Fuse Configuration
 *
 * You can edit these options to change the default options. All these options also can be changed per component
 * basis. See `app/main/pages/authentication/login/login.component.ts` constructor method to learn more
 * about changing these options per component basis.
 */

export const mainConfig: FuseConfig = {
  layout: {
    style: 'vertical-layout-1',
    width: 'fullwidth',
    navbar: {
      background: 'mat-fuse-dark-800-bg',
      folded: true,
      hidden: false,
      position: 'left',
      variant: 'vertical-style-2'
    },
    toolbar: {
      background: 'mat-white-500-bg',
      hidden: false,
      position: 'below-fixed'
    },
    footer: {
      background: 'mat-white-500-bg',
      hidden: false,
      position: 'below-static'
    },
    sidepanel: {
      hidden: true,
      position: 'right'
    }
  },
  customScrollbars: true
};
