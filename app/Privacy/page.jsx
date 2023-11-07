import Link from 'next/link'
export default function Privacy() { 
  return (
    <section className="w-full h-full max-w-[1340px] mx-auto">
      <div className="w-full h-full mt-[60px] py-20 px-4 sm:px-10 flex flex-col items-start gap-10">
          <div>
            <h1 className="text-4xl font-bold">Privacy Policy.</h1>
            <p className="mt-4">Welcome to Ship-media's website. At Ship-media, we are committed to protecting your privacy and providing a safe online experience for all our website visitors and users. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your personal information.

              By using our website, you consent to the practices described in this Privacy Policy. Please take a moment to read and understand this policy.

              </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold capitalize">Information we collect.</h1>
          <h1 className="mt-6 text-xl font-semibold capitalize">
          2.1. Personal Information
          </h1>
          <p className="mt-4">We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and other contact details when you interact with our website or contact us for inquiries.</p>
          <h1 className="mt-4 text-xl font-semibold capitalize">
          2.2. Usage Information
          </h1>
          <p className="mt-4">We may automatically collect certain information about your use of our website, including your IP address, browser type, operating system, referring URLs, and other browsing-related data.</p>
        </div>

        <div>
        <h1 className="text-2xl font-bold">3. How We Use Your Information</h1>
            <p className="mt-4">
            We may use the collected information for the following purposes:

To provide and maintain our web development services.
To communicate with you and respond to your inquiries.
To improve our website and services.
To send marketing and promotional materials related to our services (only with your consent).
To comply with legal obligations.
              </p>
        </div>
        <div>
        <h1 className="text-2xl font-bold">4. Disclosure of Your Information</h1>
            <p className="mt-4">
            We may disclose your personal information to third parties under the following circumstances:

To service providers and partners who help us with website maintenance and analytics.
In response to a legal request, such as a court order or subpoena.
To protect our rights, privacy, safety, or property, and that of our users and third parties.
In connection with a merger, acquisition, or sale of all or a portion of our business.
              </p>
        </div>
        <div>
        <h1 className="text-2xl font-bold">5. Data Security</h1>
            <p className="mt-4">
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission or storage can be guaranteed to be 100% secure, so we cannot ensure or warrant the security of any information you transmit to us.
              </p>
        </div>
      
        <div>
        <h1 className="text-2xl font-bold">6. Your Rights</h1>
            <p className="mt-4">
            You have certain rights regarding your personal information, including the right to access, correct, delete, or limit its use. If you wish to exercise these rights, please contact us using the information provided   <Link className="underline text-blue-500" href="/Contact">Here</Link>.
              </p>
        </div>
      
        <div>
        <h1 className="text-2xl font-bold">7. Changes to this Privacy Policy</h1>
            <p className="mt-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.


              </p>
        </div>
        <div>
        <h1 className="text-2xl font-bold">Date.</h1>
            <p className="mt-4">
            2023-11-06


              </p>
        </div>







        <div>

        </div>

      </div>
    </section>
  )
}