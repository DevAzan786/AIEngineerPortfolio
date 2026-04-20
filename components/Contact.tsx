'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/Card';
import { Input, Textarea } from './ui/Input';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { resume } from '@/lib/resume';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [toast, setToast] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgjojkn';

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(t);
  }, [toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (submitStatus) setSubmitStatus(null);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      const status = {
        type: 'error',
        message: 'Please fill out all fields before sending.',
      } as const;
      setSubmitStatus(status);
      setToast(status);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Form submission failed: ${res.status}`);
      }

      const status = {
        type: 'success',
        message: 'Message sent successfully. I’ll get back to you soon!',
      } as const;
      setSubmitStatus(status);
      setToast(status);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      const status = {
        type: 'error',
        message: 'Failed to send message. Please try again in a moment.',
      } as const;
      setSubmitStatus(status);
      setToast(status);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: resume.email,
      link: `mailto:${resume.email}`,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'malikazan',
      link: 'https://www.linkedin.com/in/malikazan/',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: resume.phone,
      link: `tel:${resume.phone.replace(/\s/g, '')}`,
    },
    {
      icon: '🌍',
      label: 'Location',
      value: resume.location,
      link: '',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Let's discuss your next AI project or collaboration opportunity
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method) => (
            <Card
              key={method.label}
              className="text-center animate-slide-up"
              interactive
            >
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="font-semibold text-text-primary mb-2">
                  {method.label}
                </h3>
                {method.link ? (
                  <a
                    href={method.link}
                    className="text-primary hover:text-primary-light transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-text-secondary text-sm">{method.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="animate-slide-up" gradient>
            <CardHeader>
              <h3 className="text-2xl font-bold">Send Me a Message</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus && (
                  <div
                    className={`rounded-lg border p-4 ${
                      submitStatus.type === 'success'
                        ? 'border-success/40 bg-success/10 text-success'
                        : 'border-error/40 bg-error/10 text-error'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    <p className="text-sm font-semibold">{submitStatus.message}</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Input
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={loading}
                  disabled={loading}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-border text-center animate-fade-in">
          <p className="text-text-secondary mb-4">
            Let's collaborate and build something amazing together
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge variant="accent">Available for Projects</Badge>
            <Badge variant="success">Open to Opportunities</Badge>
            <Badge variant="primary">Let's Talk</Badge>
          </div>
          <p className="text-text-tertiary text-sm mt-8">
            © 2024 AI Engineer Portfolio. All rights reserved.
          </p>
        </div>
      </div>

      {/* Flash message (toast) */}
      {toast && (
        <div className="fixed bottom-4 md:bottom-6 inset-x-4 md:inset-x-auto md:right-6 z-[80] animate-slide-up safe-bottom">
          <div
            className={`rounded-xl border px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-md md:min-w-[360px] ${
              toast.type === 'success'
                ? 'border-success/40 bg-success/10 text-success'
                : 'border-error/40 bg-error/10 text-error'
            }`}
            role="status"
            aria-live="polite"
          >
            <p className="text-sm font-semibold">{toast.message}</p>
          </div>
        </div>
      )}
    </section>
  );
}
