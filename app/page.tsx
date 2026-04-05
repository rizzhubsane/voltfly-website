"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Zap,
  BatteryCharging,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Download,
  Menu,
  X,
  ArrowRight,
  Clock,
} from "lucide-react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ background: "#060606", color: "#ffffff" }} className="flex flex-col min-h-screen font-sans">
      <div className="bg-texture" />

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav" : ""}`}
        style={{ paddingTop: scrolled ? "10px" : "20px", paddingBottom: scrolled ? "10px" : "20px" }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Voltfly" width={120} height={48} className="drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]" priority style={{ objectFit: "contain" }} />
          </div>

          {/* Desktop links in pill */}
          <div
            className="hidden md:flex items-center gap-7 px-7 py-2.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {["How It Works", "Plans", "Hubs", "Contact"].map((label, i) => (
              <a
                key={label}
                href={["#how-it-works", "#plans", "#hubs", "#contact"][i]}
                className="text-sm font-medium transition-colors"
                style={{ color: "#C2C2C2" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#C2C2C2")}
              >
                {label}
              </a>
            ))}
          </div>

          <a href="#app" className="hidden md:inline-flex btn-primary px-6 py-3 text-sm">
            Download App
          </a>

          <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass-nav absolute inset-x-0 top-full border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <div className="px-5 py-6 flex flex-col gap-1">
              {[["How It Works", "#how-it-works"], ["Plans", "#plans"], ["Hubs", "#hubs"], ["Contact", "#contact"]].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)}
                  className="py-3.5 border-b text-base font-medium text-white"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                >{label}</a>
              ))}
              <a href="#app" onClick={() => setMenuOpen(false)} className="btn-primary mt-5 py-4 text-base text-center">
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative flex items-center min-h-screen pt-28 pb-20 overflow-hidden">
        {/* Ambient glows */}
        <div className="glow-cyan" style={{ top: "-15%", left: "-15%" }} />
        <div className="glow-lime" style={{ bottom: "-10%", right: "-10%" }} />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left copy */}
            <div>
              {/* Eyebrow pill */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#C2C2C2" }}
              >
                <Zap size={15} style={{ color: "#AADD00" }} />
                Charge. Ride. Repeat.
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-white">
                Delhi's Electric<br />
                <span className="text-volt">Delivery</span> <span className="text-fly">Fleet</span>
              </h1>

              <p className="text-lg sm:text-xl mb-10 max-w-lg leading-relaxed" style={{ color: "#C2C2C2" }}>
                Rent an electric scooty. Pay weekly. Ride daily. Join 100+ delivery partners already saving on fuel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="#plans" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base">
                  Get Started <ArrowRight size={18} />
                </a>
                <a href="#how-it-works" className="btn-outline inline-flex items-center justify-center px-8 py-4 text-base">
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {[
                  { val: "100+", label: "Active Riders" },
                  { val: "2", label: "Delhi Hubs" },
                  { val: "₹250", label: "Per Day" },
                  { val: "Zero", label: "Fuel Cost" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-black text-white mb-1">
                      {val.endsWith("+") ? <>{val.slice(0, -1)}<span style={{ color: "#00D4FF" }}>+</span></> : val}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "#C2C2C2" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="phone-frame w-[288px] h-[600px] relative" style={{ transform: "rotate(2deg)" }}>
                <div className="phone-notch" />
                <div className="phone-screen absolute inset-0 pt-12 flex flex-col gap-4 px-5 pb-5">
                  {/* Top bar */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "#C2C2C2" }}>Current Plan</div>
                      <div className="font-bold text-white">Weekly Active</div>
                    </div>
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.3)" }}
                    >
                      <Zap size={20} style={{ color: "#00D4FF" }} />
                    </div>
                  </div>

                  {/* Vehicle card */}
                  <div className="app-card p-5 relative overflow-hidden">
                    <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%", background: "rgba(0,212,255,0.15)", filter: "blur(30px)" }} />
                    <div className="text-xs mb-1.5" style={{ color: "#C2C2C2" }}>Vehicle Status</div>
                    <div className="text-xl font-black text-white mb-4 tracking-widest">DL 3S ER 1234</div>
                    <div
                      className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg"
                      style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <BatteryCharging size={16} style={{ color: "#55CC5A" }} />
                      <span style={{ color: "#55CC5A" }} className="font-semibold">84%</span>
                      <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
                      <span style={{ color: "#C2C2C2" }}>52 km</span>
                    </div>
                  </div>

                  {/* Payment card */}
                  <div className="app-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium" style={{ color: "#C2C2C2" }}>Next Payment</span>
                      <span className="font-black text-lg" style={{ color: "#00D4FF" }}>₹1,610</span>
                    </div>
                    <div className="text-xs mb-3" style={{ color: "#C2C2C2" }}>Due in 3 days (Thursday)</div>
                    <button
                      className="w-full py-2.5 rounded-xl text-sm font-bold transition-colors"
                      style={{ background: "rgba(0,212,255,0.12)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}
                    >
                      Pay via UPI
                    </button>
                  </div>

                  {/* Bottom nav */}
                  <div className="mt-auto app-card p-3">
                    <div className="flex justify-between px-3">
                      {[
                        { Icon: Smartphone, label: "Home", active: true },
                        { Icon: MapPin, label: "Swap", active: false },
                        { Icon: ShieldCheck, label: "Support", active: false },
                      ].map(({ Icon, label, active }) => (
                        <div key={label} className="flex flex-col items-center gap-1" style={{ color: active ? "#00D4FF" : "#C2C2C2" }}>
                          <Icon size={20} />
                          <span style={{ fontSize: 10, fontWeight: 600 }}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-28 relative section-divider">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="reveal text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight">Start riding in 3 steps</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#C2C2C2" }}>Simple onboarding for delivery partners. Get on the road the same day.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Smartphone, n: "01", title: "Download & Sign Up", body: "Create your account and complete KYC verification instantly with Aadhaar, PAN, and a quick selfie.", iconCls: "icon-box-cyan", iconColor: "#00D4FF" },
              { Icon: ShieldCheck, n: "02", title: "Pay Deposit & Choose Hub", body: "Pay a fully refundable ₹2,000 security deposit and pick up your scooty from the nearest Voltfly hub.", iconCls: "icon-box-cyan", iconColor: "#00D4FF" },
              { Icon: Zap, n: "03", title: "Ride & Pay Weekly", body: "Start earning immediately. Pay your weekly rent via UPI in the app. Battery swaps are included.", iconCls: "icon-box-cyan", iconColor: "#00D4FF" },
            ].map(({ Icon, n, title, body, iconCls, iconColor }, i) => (
              <div key={n} className={`reveal reveal-delay-${i + 1} glass-card rounded-3xl p-10 relative overflow-hidden`}>
                {/* Big step number watermark */}
                <div className="absolute top-6 right-6 text-8xl font-black" style={{ color: "rgba(255,255,255,0.04)", lineHeight: 1 }}>{n}</div>
                <div className={`icon-box ${iconCls} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`} style={{ color: iconColor }}>
                  <Icon size={30} />
                </div>
                <h3 className="text-xl font-black text-white mb-4">{title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#C2C2C2" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANS & PRICING ── */}
      <section id="plans" className="py-28 relative section-divider overflow-hidden">
        <div className="glow-cyan" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.5 }} />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="reveal text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight">Simple, transparent pricing</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#C2C2C2" }}>No hidden fees. Choose a plan that fits your shifts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Daily */}
            <div className="reveal reveal-delay-1 glass-card rounded-3xl p-10 flex flex-col">
              <div className="text-xl font-bold text-white mb-4">Daily</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-white">₹250</span>
                <span className="font-medium" style={{ color: "#C2C2C2" }}>/day</span>
              </div>
              <p className="mb-8 text-base" style={{ color: "#C2C2C2" }}>Flexible. Pay per day. Perfect for part-time riders.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {["Unlimited battery swaps", "App-based UPI payments"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={20} style={{ color: "#55CC5A", flexShrink: 0 }} />
                    <span className="text-white font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#app" className="btn-outline w-full py-4 text-center font-bold">
                Choose Daily
              </a>
            </div>

            {/* Weekly — featured */}
            <div className="reveal reveal-delay-2 card-featured rounded-3xl p-10 flex flex-col relative" style={{ transform: "translateY(-16px)" }}>
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-3xl" style={{ background: "linear-gradient(90deg, #4AB4EA, #55CC5A)" }} />
              {/* Badge */}
              <div className="absolute top-3 right-6 badge-cyan text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </div>

              <div className="text-xl font-bold text-white mb-4 mt-4">Weekly</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-white">₹1,610</span>
                <span className="font-medium" style={{ color: "#C2C2C2" }}>/week</span>
              </div>
              <div className="badge-cyan text-sm font-bold px-3 py-1 rounded-lg mb-6 w-fit">Just ₹230/day</div>
              <p className="mb-8 text-base" style={{ color: "#C2C2C2" }}>The standard choice for full-time delivery partners.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {["Unlimited battery swaps", "App-based UPI payments", "Priority roadside support"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={20} style={{ color: "#55CC5A", flexShrink: 0 }} />
                    <span className="text-white font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#app" className="btn-primary w-full py-4 text-center text-base">
                Choose Weekly
              </a>
            </div>

            {/* Monthly */}
            <div className="reveal reveal-delay-3 glass-card rounded-3xl p-10 flex flex-col">
              <div className="text-xl font-bold text-white mb-4">Monthly</div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-black text-white">₹6,900</span>
                <span className="font-medium" style={{ color: "#C2C2C2" }}>/month</span>
              </div>
              <p className="mb-8 text-base" style={{ color: "#C2C2C2" }}>Best value for dedicated, long-term riders.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {["Unlimited battery swaps", "App-based UPI payments", "Priority roadside support"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={20} style={{ color: "#55CC5A", flexShrink: 0 }} />
                    <span className="text-white font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#app" className="btn-outline w-full py-4 text-center font-bold">
                Choose Monthly
              </a>
            </div>
          </div>

          {/* Deposit note */}
          <div className="reveal glass-card rounded-3xl p-8 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <ShieldCheck size={22} style={{ color: "#00D4FF" }} />
              <span className="text-lg font-bold text-white">Security Deposit</span>
            </div>
            <p className="text-base" style={{ color: "#C2C2C2" }}>
              A fully refundable ₹2,000 deposit is collected once at onboarding and returned when you return the scooty in good condition.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY VOLTFLY ── */}
      <section className="py-28 relative section-divider">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="reveal text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight">Why delivery partners choose Voltfly</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#C2C2C2" }}>Built for the demands of Delhi's gig economy.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Zap, label: "Zero Fuel Cost", body: "Electric means no petrol bills. Ever. Save ₹300–500 per day vs a petrol bike.", iconCls: "icon-box-lime", color: "#AADD00", delay: 1 },
              { Icon: BatteryCharging, label: "Battery Swap", body: "Swap your battery in 2 minutes at our network stations. Never run out mid-shift.", iconCls: "icon-box-green", color: "#55CC5A", delay: 2 },
              { Icon: Smartphone, label: "Everything in App", body: "Pay rent, track your vehicle, raise requests—all seamlessly from your phone.", iconCls: "icon-box-cyan", color: "#00D4FF", delay: 3 },
              { Icon: ShieldCheck, label: "Refundable Deposit", body: "Your ₹2,000 deposit comes back when you return the scooty in good condition.", iconCls: "icon-box-cyan", color: "#4AB4EA", delay: 4 },
            ].map(({ Icon, label, body, iconCls, color, delay }) => (
              <div key={label} className={`reveal reveal-delay-${delay} glass-card rounded-3xl p-8`}>
                <div className={`icon-box ${iconCls} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`} style={{ color }}>
                  <Icon size={30} />
                </div>
                <h3 className="text-xl font-black text-white mb-4">{label}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#C2C2C2" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HUBS ── */}
      <section id="hubs" className="py-28 relative section-divider overflow-hidden">
        <div className="glow-lime" style={{ top: 0, right: "-15%", opacity: 0.4 }} />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="reveal text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight">Pick up from our Delhi hubs</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#C2C2C2" }}>Two locations covering South and Central Delhi.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Okhla Hub", address: "Okhla Industrial Area, Phase II\nNew Delhi", delay: 1 },
              { name: "Jhandewalan Hub", address: "Jhandewalan\nCentral Delhi", delay: 2 },
            ].map(({ name, address, delay }) => (
              <div key={name} className={`reveal reveal-delay-${delay} glass-card rounded-3xl p-10`}>
                <div className="flex gap-5">
                  <div
                    className="icon-box w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                    style={{ color: "#00D4FF" }}
                  >
                    <MapPin size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-3">{name}</h3>
                    <p className="text-base mb-5 leading-relaxed whitespace-pre-line" style={{ color: "#C2C2C2" }}>{address}</p>
                    <div className="hub-hours mb-6">
                      <Clock size={18} style={{ color: "#00D4FF" }} />
                      Mon–Sat · 9AM–7PM
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-base font-bold transition-colors"
                      style={{ color: "#00D4FF" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#00D4FF")}
                    >
                      Get Directions <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP DOWNLOAD ── */}
      <section id="app" className="py-28 relative section-divider overflow-hidden">
        <div className="glow-cyan" style={{ bottom: "-20%", left: "-15%", opacity: 0.6 }} />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          {/* Feature container */}
          <div className="glass-card rounded-[48px] p-10 lg:p-20 relative overflow-hidden" style={{ border: "1px solid rgba(0,212,255,0.15)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top right, rgba(0,212,255,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div className="reveal">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tight">Manage everything from your phone</h2>
                <p className="text-xl mb-12 leading-relaxed" style={{ color: "#C2C2C2" }}>
                  The Voltfly Rider app is your key to the fleet. Payments, support, and tracking — all in one place.
                </p>

                <ul className="space-y-6 mb-14">
                  {[
                    "Phone OTP login — no password needed",
                    "Pay rent in one tap via UPI",
                    "View your vehicle and battery status",
                    "Raise service requests instantly",
                    "Check your swap history",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-4">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.25)", color: "#00D4FF" }}
                      >
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-white font-medium text-lg">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  <a href="#"
                    className="flex items-center gap-4 px-7 py-4 rounded-2xl font-bold text-black bg-white hover:bg-gray-100 transition-colors"
                    style={{ boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
                  >
                    <Download size={26} />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest opacity-70 font-black">Get it on</div>
                      <div className="text-base">Google Play</div>
                    </div>
                  </a>
                  <a href="#"
                    className="flex items-center gap-4 px-7 py-4 rounded-2xl font-bold text-white transition-colors"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                  >
                    <Download size={26} />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest opacity-70 font-black">Download on the</div>
                      <div className="text-base">App Store</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* App mockup 2 */}
              <div className="reveal reveal-delay-2 flex justify-center">
                <div className="phone-frame w-[300px] h-[620px] relative">
                  <div className="phone-notch" />
                  <div className="phone-screen absolute inset-0 pt-14 px-6 pb-6">
                    <h3 className="text-xl font-black text-white mb-6">Payment History</h3>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="app-card p-4 flex justify-between items-center">
                          <div>
                            <div className="font-bold text-white mb-1">Weekly Rent</div>
                            <div className="text-xs" style={{ color: "#C2C2C2" }}>Paid via UPI</div>
                          </div>
                          <div className="text-right">
                            <div className="font-black text-white mb-1.5">₹1,610</div>
                            <div
                              className="text-xs font-bold px-2 py-0.5 rounded-md"
                              style={{ background: "rgba(85,204,90,0.15)", color: "#55CC5A", border: "1px solid rgba(85,204,90,0.25)" }}
                            >
                              Successful
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="section-divider pt-20 pb-10 relative z-10" style={{ background: "#030303" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-14 items-start">
            {/* Left */}
            <div>
              <div className="mb-5">
                <Image src="/logo.png" alt="Voltfly" width={130} height={52} className="drop-shadow-[0_0_10px_rgba(0,212,255,0.35)]" style={{ objectFit: "contain" }} />
              </div>
              <p className="text-base leading-relaxed" style={{ color: "#C2C2C2" }}>
                Voltfly EV LLP<br />
                New Delhi, India
              </p>
            </div>

            {/* Center links */}
            <div className="flex flex-col gap-4 md:items-center">
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <a href="#" className="footer-link">Terms & Conditions</a>
              <a href="#contact" className="footer-link">Contact Us</a>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 md:items-end">
              <a
                href="https://wa.me/919999999999"
                className="inline-flex items-center gap-3 footer-link group"
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Smartphone size={15} />
                </span>
                WhatsApp Support
              </a>
              <a
                href="mailto:gsanghi@voltflyev.com"
                className="inline-flex items-center gap-3 footer-link group"
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Zap size={15} />
                </span>
                gsanghi@voltflyev.com
              </a>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-sm" style={{ color: "#6b7280" }}>© 2026 Voltfly EV LLP. All rights reserved.</p>
            <p className="text-sm font-black tracking-[0.2em] uppercase" style={{ color: "#6b7280" }}>
              Charge. Ride. Repeat.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
