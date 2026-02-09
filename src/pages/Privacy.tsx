import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            <p><strong className="text-foreground">Effective Date:</strong> February 2025</p>
            <p>NextGen Intelligence ("we", "us", "our") is committed to protecting your personal information. This policy explains how we collect, use, and protect your data.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Information We Collect</h2>
            <p>We may collect your name, email address, phone number, and any other information you provide through our contact form or direct communication with us.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your enquiries</li>
              <li>To provide our services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">Data Protection</h2>
            <p>We take reasonable measures to protect your personal information from unauthorised access, alteration, or destruction. We comply with the Protection of Personal Information Act (POPIA) of South Africa.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Third-Party Sharing</h2>
            <p>We do not sell, trade, or share your personal information with third parties except as required by law or with your explicit consent.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Contact</h2>
            <p>For privacy-related enquiries, contact us at <a href="mailto:info@nextgenintelligence.co.za" className="text-primary hover:underline">info@nextgenintelligence.co.za</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
