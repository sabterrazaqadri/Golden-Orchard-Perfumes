import Container from '@/app/components/ui/Container'

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111827] to-[#0f172a] text-cream pt-24 pb-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gold">Cookie Policy</h1>
          
          <div className="space-y-6 text-cream/80">
            <p>Last updated: August 6, 2023</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">What Are Cookies</h2>
              <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and more useful to you.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Authentication cookies: To remember your login status</li>
                <li>Preference cookies: To remember your website preferences</li>
                <li>Analytics cookies: To understand how visitors interact with our website</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold">Your Choices Regarding Cookies</h2>
              <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}