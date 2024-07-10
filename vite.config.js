import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_SERVICE_KEY': JSON.stringify(env.REACT_APP_SERVICE_KEY),
      'process.env.REACT_APP_TEMPLATE_KEY': JSON.stringify(env.REACT_APP_TEMPLATE_KEY),
      'process.env.REACT_APP_PUBLIC_KEY': JSON.stringify(env.REACT_APP_PUBLIC_KEY),

    },
    plugins: [react()],
  }
})
