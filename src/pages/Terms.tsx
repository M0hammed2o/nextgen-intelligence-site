import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-8">Terms & Conditions</h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            <p><strong className="text-foreground">Effective Date:</strong> February 2025</p>
            <p>These terms and conditions govern your use of the NextGen Intelligence website and our services.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Services</h2>
            <p>NextGen Intelligence provides custom software development, automation systems, and AI-assisted business tools. All services are delivered on a project basis with scope and pricing agreed upon before work commences.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Intellectual Property</h2>
            <p>Unless otherwise agreed in writing, all intellectual property rights in the systems and software we develop remain with NextGen Intelligence until full payment is received. Upon full payment, ownership of the delivered system transfers to the client.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Payment Terms</h2>
            <p>Payment terms are agreed upon for each project individually. A deposit may be required before work begins. All prices are quoted in South African Rand (ZAR) unless otherwise stated.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Limitation of Liability</h2>
            <p>NextGen Intelligence shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or systems. Our total liability shall not exceed the amount paid for the specific service in question.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Governing Law</h2>
            <p>These terms are governed by the laws of the Republic of South Africa.</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Contact</h2>
            <p>For any questions about these terms, contact us at <a href="mailto:info@nextgenintelligence.co.za" className="text-primary hover:underline">info@nextgenintelligence.co.za</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
