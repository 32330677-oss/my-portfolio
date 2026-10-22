import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Your website address, WITHOUT a "/" at the end, e.g. "https://hamzahashma.com".
// Fill it in when you have a domain, then run "npm run build" again.
// Link previews on WhatsApp / Facebook / LinkedIn need it.
const SITE_URL = ''

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-url',
      transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
    },
  ],
})
