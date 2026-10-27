import React, { useState } from 'react';
import { PageId } from '../../types';
import { SCHOOL_INFO, IMPORTANT_LINKS } from '../../data/schoolData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Send
} from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent';

interface ContactPageProps {
  onNavigate?: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenAdmission }) => {
  const [formState, setFormState] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.mobile.trim() || !formState.message.trim()) {
      setError('Please fill in all mandatory fields (Name, Mobile, and Message).');
      return;
    }

    if (!/^\d{10}$/.test(formState.mobile.replace(/[^0-9]/g, ''))) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    setError('');
    const waMsg = 
`📩 *WEBSITE INQUIRY / MESSAGE*
*Dreams Valley Public School, Ichol*
━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formState.name}
📞 *Mobile:* ${formState.mobile}
📧 *Email:* ${formState.email || 'Not provided'}

💬 *Message:*
${formState.message}
━━━━━━━━━━━━━━━━━━━━━`;

    const principalPhone = '918770577137';
    const url = `https://api.whatsapp.com/send?phone=${principalPhone}&text=${encodeURIComponent(waMsg)}`;
    setWaUrl(url);
    setSubmitted(true);

    try {
      window.open(url, '_blank');
    } catch {
      window.location.href = url;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#101E53] via-[#172B73] to-[#12225B] text-white py-14 sm:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.06] bg-repeat pointer-events-none select-none" 
          style={{ backgroundImage: "url('/school_assets/school_doodle_pattern.svg')", backgroundSize: '460px 460px' }} 
        />
        <AnimatedContent distance={30} direction="vertical" duration={0.7} trigger="mount">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#FF7A00] border border-white/15">
              <span>Get in Touch with Administration · Ichol, Satna</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
              Contact Us &amp; Location
            </h1>
            <p className="text-white/80 max-w-3xl text-sm sm:text-base leading-relaxed font-normal">
              Have questions regarding admissions, bus transport, or school visits? Reach out to our Principal, Director, Bus Desk, or visit our campus office.
            </p>
          </div>
        </AnimatedContent>
      </section>

      {/* 2. Direct Contacts Grid (Soft UI Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="sr-only">Key School Contact Desks</h2>
        <AnimatedContent distance={35} direction="vertical" duration={0.7} stagger={0.08} trigger="mount">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Principal */}
          <div className="soft-card p-6 space-y-3">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
              Principal Sir
            </span>
            <h3 className="font-bold text-white text-base sm:text-lg font-heading leading-tight">
              MR. SATYAVRAT SINGH
            </h3>
            <p className="text-xs text-white/75">Academic Head &middot; Admissions &amp; student care</p>
            <a 
              href={`tel:${SCHOOL_INFO.contacts.principal}`}
              className="btn-admissions px-3 py-2 text-xs font-mono font-semibold inline-flex items-center gap-2 w-full justify-center"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>{SCHOOL_INFO.contacts.principal}</span>
            </a>
          </div>

          {/* Director */}
          <div className="soft-card p-6 space-y-3">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
              Director Sir
            </span>
            <h3 className="font-bold text-white text-base sm:text-lg font-heading leading-tight">
              MR. VINOD KUMAR SINGH
            </h3>
            <p className="text-xs text-white/75">Executive Head &middot; School society vision</p>
            <a 
              href={`tel:${SCHOOL_INFO.contacts.director}`}
              className="btn-admissions px-3 py-2 text-xs font-mono font-semibold inline-flex items-center gap-2 w-full justify-center"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>{SCHOOL_INFO.contacts.director}</span>
            </a>
          </div>

          {/* Vice Principal & Transport Incharge */}
          <div className="soft-card p-6 space-y-3">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
              Administration &amp; Transport
            </span>
            <h3 className="font-bold text-white text-base sm:text-lg font-heading leading-snug">Vice Principal &amp; Transport</h3>
            <p className="text-xs text-white/75">Academics coordination &amp; GPS bus fleet</p>
            <a 
              href={`tel:${SCHOOL_INFO.contacts.vicePrincipalAndTransport}`}
              className="btn-admissions px-3 py-2 text-xs font-mono font-semibold inline-flex items-center gap-2 w-full justify-center"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>{SCHOOL_INFO.contacts.vicePrincipalAndTransport}</span>
            </a>
          </div>

          {/* Account Section */}
          <div className="soft-card p-6 space-y-3">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
              Finance &amp; Fees
            </span>
            <h3 className="font-bold text-white text-lg font-heading">Account Section</h3>
            <p className="text-xs text-white/75">Tuition fees, receipts &amp; registrations</p>
            <a 
              href={`tel:${SCHOOL_INFO.contacts.accountSection}`}
              className="btn-admissions px-3 py-2 text-xs font-mono font-semibold inline-flex items-center gap-2 w-full justify-center"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>{SCHOOL_INFO.contacts.accountSection}</span>
            </a>
          </div>

        </div>
        </AnimatedContent>
      </section>

      {/* 3. Inquiry Form & Address Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={35} direction="vertical" duration={0.7} trigger="scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 soft-card p-6 sm:p-10 space-y-6">
            <div className="border-b border-white/15 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Feedback &amp; Queries
              </span>
              <h2 className="text-2xl font-bold text-white font-heading mt-1">
                Send an Enquiry or Message
              </h2>
            </div>

            {submitted ? (
              <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 text-center space-y-3 text-white">
                <CheckCircle2 className="w-12 h-12 text-[#FF7A00] mx-auto" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Your message has been sent. Thank you!
                </h3>
                <p className="text-xs text-white/80 max-w-md mx-auto">
                  Our office desk at Ichol has received your enquiry. We will reach out to you at <strong className="font-mono text-[#FF7A00]">{formState.mobile}</strong> shortly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  {waUrl && (
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 rounded-lg shadow-md transition-all cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>Open Principal Sir&apos;s WhatsApp</span>
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', mobile: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-white/15 border border-white/20 rounded-lg hover:bg-white/25 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-rose-500/20 border border-rose-500/30 text-rose-200 p-3 rounded-lg text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#FF7A00]" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-white/90 mb-1">
                    Your Full Name <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Candidate / Parent Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-mobile" className="block text-xs font-semibold text-white/90 mb-1">
                      Mobile Number <span className="text-[#FF7A00]">*</span>
                    </label>
                    <input
                      id="contact-mobile"
                      name="mobile"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formState.mobile}
                      onChange={(e) => setFormState({ ...formState, mobile: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-white/90 mb-1">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="name@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-white/90 mb-1">
                    Message / Question <span className="text-[#FF7A00]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Inquire about admission, bus route, fees, or visit timings..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-admissions px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-2 cursor-pointer rounded-[10px]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="soft-card p-6 sm:p-8 space-y-4">
              <h2 className="font-bold text-white text-lg font-heading">
                School Address &amp; Office
              </h2>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                <MapPin className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">{SCHOOL_INFO.name}</strong>
                  <p className="text-white/80">{SCHOOL_INFO.address.landmark}, {SCHOOL_INFO.address.road}</p>
                  <p className="text-white/80">Village {SCHOOL_INFO.address.village}, {SCHOOL_INFO.address.tehsil}</p>
                  <p className="text-white/80">{SCHOOL_INFO.address.district} (M.P.), Pin Code - {SCHOOL_INFO.address.pin}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-white/90 pt-2 border-t border-white/15">
                <Mail className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 block text-xs">Official Email:</span>
                  <a href={`mailto:${SCHOOL_INFO.contacts.email}`} className="font-mono text-white font-medium hover:text-[#FF7A00]">
                    {SCHOOL_INFO.contacts.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-white/90 pt-2 border-t border-white/15">
                <Clock className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 block text-xs">Administrative Hours:</span>
                  <p className="font-semibold text-white">Monday to Saturday: 9:00 AM – 3:00 PM</p>
                  <p className="text-xs text-white/70">Principal meeting (MR. SATYAVRAT SINGH): 10:00 AM – 12:00 PM &amp; 1:00 PM – 2:30 PM</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/15">
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="w-full btn-admissions py-2.5 px-4 text-xs font-semibold text-center cursor-pointer rounded-[10px]"
                >
                  Fill Online Admission Form
                </button>
              </div>
            </div>

            {/* Portals */}
            <div className="soft-card p-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Official Education Portals
              </span>
              <ul className="space-y-1.5 text-xs">
                {IMPORTANT_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#FF7A00] transition-colors inline-flex items-center gap-1.5 font-medium"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 text-white/40" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
        </AnimatedContent>
      </section>

      {/* 4. Map Frame (Soft UI Framing) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={35} direction="vertical" duration={0.7} trigger="scroll">
        <div className="soft-card overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white/5">
            <div>
              <h2 className="font-bold text-white text-base font-heading">Location Map: Ichol, Satna Road</h2>
              <p className="text-xs text-white/70">Near Toll-way, Ichol, Unchehra, District Satna (M.P.)</p>
            </div>
            <a
              href={SCHOOL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#FF7A00] hover:underline inline-flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 bg-slate-900/40">
            <iframe
              title="Dreams Valley Public School Location"
              src="https://maps.google.com/maps?q=24.3480849,80.7783007+(DREAMS+VALLEY+PUBLIC+SCHOOL+E.M)&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        </AnimatedContent>
      </section>

    </div>
  );
};
