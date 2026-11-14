import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { BRAND_INFO } from '../data/apps';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [mailtoGenerated, setMailtoGenerated] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      const subjectEncoded = encodeURIComponent(`[KAVTORS Inquiry] ${formData.subject}`);
      const bodyEncoded = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const link = `mailto:contact@kavtors.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
      setMailtoGenerated(link);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-royal bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-royal/20">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-brand-textNavy tracking-tight mt-4">
            Connect with KAVTORS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
            Have questions regarding our applications, closed testing tracks, or technical architecture? Send us a message or connect through our open developer channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-brand-textNavy mb-2">
              Send a Direct Message
            </h2>
            <p className="text-sm text-brand-slate mb-8">
              Fill out the form below. All fields are verified prior to transmission.
            </p>

            {submitStatus === 'success' ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-emerald-900">
                  Message Prepared Successfully
                </h3>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message has been validated and staged. You can also send it directly via your mail client below:
                </p>

                {mailtoGenerated && (
                  <div className="pt-2">
                    <a
                      href={mailtoGenerated}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-emerald-700 hover:bg-emerald-800 text-white transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Mail Client</span>
                    </a>
                  </div>
                )}

                <div className="pt-4 border-t border-emerald-200">
                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-bold text-emerald-700 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-brand-royal/20 ${
                      errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 focus:border-brand-royal'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-brand-royal/20 ${
                      errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 focus:border-brand-royal'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Feedback on S Finder or Testing Request"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-brand-royal/20 ${
                      errors.subject ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 focus:border-brand-royal'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your thoughts, suggestions, or technical questions..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-brand-royal/20 resize-none ${
                      errors.message ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 focus:border-brand-royal'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-sm bg-brand-navy hover:bg-brand-royal text-white transition-all duration-200 shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating & Dispatching...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Developer Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6">
              <h3 className="font-display text-xl font-bold text-brand-textNavy">
                Official Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-lightBlue text-brand-royal flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Developer Brand</div>
                    <div className="font-bold text-brand-textNavy mt-0.5">{BRAND_INFO.name}</div>
                    <div className="text-xs text-slate-500">{BRAND_INFO.developerAccount}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-lightBlue text-brand-royal flex items-center justify-center shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">GitHub Organization</div>
                    <a
                      href="https://github.com/programmer-kunal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-royal hover:underline mt-0.5 block"
                    >
                      @programmer-kunal
                    </a>
                    <div className="text-xs text-slate-500">Public issues, feature requests & code repositories</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closed Testing Notice Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-navy to-brand-darkNavy text-white shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tester Community</span>
              </div>
              <h4 className="font-display text-lg font-bold text-white">
                Interested in Closed Testing?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you would like early access to WeatherSnap or S Finder on the Google Play closed testing tracks, include your Google Play account email in your inquiry message!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
