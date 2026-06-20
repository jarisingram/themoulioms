import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Heart, Check } from 'lucide-react';

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/meenqegr';

const fieldClass =
  'mt-2 border-0 border-b border-border rounded-none bg-transparent px-0 font-serif text-lg focus-visible:ring-0 focus-visible:border-primary';

const SectionHeader = ({ children, subtitle }) => (
  <div className="mb-6">
    <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
      {children}
    </p>
    {subtitle && (
      <p className="text-xs text-muted-foreground mt-1 italic font-serif">
        {subtitle}
      </p>
    )}
    <div className="w-10 h-px bg-accent mt-3" />
  </div>
);

export default function RSVPForm() {
  const [form, setForm] = useState({
    guest_name: '',
    email: '',
    phone: '',
    attending: '',
    bringing_plus_one: '',
    plus_one_name: '',
    dietary_restrictions: '',
    plus_one_dietary: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.guest_name || !form.attending) return;
    setSubmitting(true);
    setError(null);
    try {
      const payload = {
        ...form,
        _subject: `Wedding RSVP - ${form.guest_name} (${form.attending === 'yes' ? 'Accepting' : 'Declining'})`,
      };
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Submission failed (${res.status})`);
      }
      setDone(true);
    } catch (err) {
      console.error('RSVP submission error:', err);
      setError(
        'Sorry, something went wrong sending your RSVP. Please try again, or email us directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-3">
            Kindly Respond
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-primary font-light italic">
            RSVP
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
          <p className="font-serif text-lg text-foreground/70 mt-8">
            Please reply by <span className="italic">January 13, 2027</span>
          </p>
        </div>

        {done ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 border border-accent/40 rounded-sm"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-3xl italic text-primary mb-3">Thank you</h3>
            <p className="font-serif text-foreground/70">
              {form.attending === 'yes'
                ? "Your response has been received. We can't wait to celebrate with you."
                : 'Your response has been received. You will be missed!'}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={submit} className="space-y-10">
            {/* Step 1 — Attendance */}
            <div>
              <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
                Will you attend?
              </Label>
              <div className="grid grid-cols-2 gap-4 mt-3">
                {[
                  { v: 'yes', l: 'Joyfully Accepts' },
                  { v: 'no', l: 'Regretfully Declines' },
                ].map((opt) => (
                  <button
                    key={opt.v}
                    type="button"
                    onClick={() => update('attending', opt.v)}
                    className={`py-4 border font-serif italic text-lg transition-all ${
                      form.attending === opt.v
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border text-foreground/70 hover:border-primary'
                    }`}
                  >
                    {opt.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Declining: just name + message */}
            {form.attending === 'no' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-8 overflow-hidden"
              >
                <div>
                  <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Your Name
                  </Label>
                  <Input
                    required
                    placeholder="e.g. John Smith"
                    value={form.guest_name}
                    onChange={(e) => update('guest_name', e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    A Note for the Couple (optional)
                  </Label>
                  <Textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="mt-2 border-0 border-b border-border rounded-none bg-transparent px-0 font-serif text-lg focus-visible:ring-0 focus-visible:border-primary resize-none"
                  />
                </div>
              </motion.div>
            )}

            {/* Accepting: full form, split into clear sections */}
            {form.attending === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-12 overflow-hidden"
              >
                {/* === SECTION: ABOUT YOU === */}
                <div className="bg-secondary/30 border border-border p-8 rounded-sm">
                  <SectionHeader subtitle="The person we invited">
                    About You
                  </SectionHeader>

                  <div className="space-y-7">
                    <div>
                      <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        Your Full Name
                      </Label>
                      <Input
                        required
                        placeholder="e.g. Jane Smith"
                        value={form.guest_name}
                        onChange={(e) => update('guest_name', e.target.value)}
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        Email
                      </Label>
                      <Input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        required
                        placeholder="e.g. (555) 123 4567"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        Any Dietary Restrictions?
                      </Label>
                      <Input
                        value={form.dietary_restrictions}
                        onChange={(e) =>
                          update('dietary_restrictions', e.target.value)
                        }
                        className={fieldClass}
                      />
                    </div>
                  </div>
                </div>

                {/* === SECTION: PLUS ONE === */}
                <div>
                  <SectionHeader subtitle="You may bring one guest with you">
                    Are You Bringing a Plus One?
                  </SectionHeader>

                  <div className="grid grid-cols-2 gap-4 mt-3">
                    {[
                      { v: 'yes', l: 'Yes, with a guest' },
                      { v: 'no', l: 'No, just me' },
                    ].map((opt) => (
                      <button
                        key={opt.v}
                        type="button"
                        onClick={() => update('bringing_plus_one', opt.v)}
                        className={`py-4 border font-serif italic text-base transition-all ${
                          form.bringing_plus_one === opt.v
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-foreground/70 hover:border-primary'
                        }`}
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>

                  {form.bringing_plus_one === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-7 mt-8 bg-secondary/30 border border-border p-8 rounded-sm overflow-hidden"
                    >
                      <div>
                        <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                          Your Guest's Full Name
                        </Label>
                        <Input
                          required
                          placeholder="e.g. Alex Johnson"
                          value={form.plus_one_name}
                          onChange={(e) => update('plus_one_name', e.target.value)}
                          className={fieldClass}
                        />
                      </div>

                      <div>
                        <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                          Your Guest's Dietary Restrictions
                        </Label>
                        <Input
                          value={form.plus_one_dietary}
                          onChange={(e) =>
                            update('plus_one_dietary', e.target.value)
                          }
                          className={fieldClass}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* === SECTION: NOTE === */}
                <div>
                  <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    A Note for the Couple (optional)
                  </Label>
                  <Textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="mt-2 border-0 border-b border-border rounded-none bg-transparent px-0 font-serif text-lg focus-visible:ring-0 focus-visible:border-primary resize-none"
                  />
                </div>
              </motion.div>
            )}

            {error && (
              <p className="text-sm text-red-700 font-serif italic text-center">
                {error}
              </p>
            )}

            {form.attending && (
              <Button
                type="submit"
                disabled={submitting || !form.guest_name || !form.attending}
                className="w-full py-7 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground tracking-[0.3em] uppercase text-xs"
              >
                <Heart className="w-3 h-3 mr-3" />
                {submitting ? 'Sending...' : 'Send Response'}
              </Button>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
