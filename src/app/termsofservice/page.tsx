import Container from '@/app/components/ui/Container'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111827] to-[#0f172a] text-cream pt-24 pb-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gold">Terms of Service</h1>
          
          <div className="space-y-6 text-cream/80">
            <p>Last updated: August 6, 2023</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Golden Orchard's website for personal, non-commercial transitory viewing only.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">3. Disclaimer</h2>
              <p>The materials on Golden Orchard's website are provided on an 'as is' basis. Golden Orchard makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">4. Limitations</h2>
              <p>In no event shall Golden Orchard or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Golden Orchard's website.</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}