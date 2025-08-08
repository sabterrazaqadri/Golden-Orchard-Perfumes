import Container from '@/app/components/ui/Container'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111827] to-[#0f172a] text-cream pt-24 pb-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gold">Privacy Policy</h1>
          
          <div className="space-y-6 text-cream/80">
            <p>Last updated: August 6, 2025</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information</li>
                <li>Order history</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Process your orders and payments</li>
                <li>Communicate with you about orders and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our services and website</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">Information Sharing</h2>
              <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Payment processors</li>
                <li>Shipping partners</li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}