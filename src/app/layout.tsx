import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import LoadingScreen from '@/components/ui/LoadingScreen'

export const metadata: Metadata = {
  title: 'Diego Gil Jiménez · Salesforce Developer & Consultant',
  description:
    'Portfolio profesional de Diego Gil Jiménez. Desarrollador y Consultor Salesforce con 3+ años de experiencia, 8 certificaciones oficiales y Ranger nivel 4 en Trailhead.',
  keywords: ['Salesforce', 'Apex', 'Flows', 'Service Cloud', 'Consultor Salesforce', 'Desarrollador Salesforce', 'Salamanca'],
  authors: [{ name: 'Diego Gil Jiménez' }],
  openGraph: {
    title: 'Diego Gil Jiménez · Salesforce Developer',
    description: 'Portfolio de Salesforce Developer con 8 certificaciones y Ranger Nv.4',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-sf-navy text-white antialiased">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
