import { Box, Typography, Button, Chip } from "@mui/material";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  {
    icon: <SchoolIcon sx={{ fontSize: 26 }} />,
    color: "#4f46e5",
    bg: "#eef2ff",
    title: "Expert Teachers",
    desc: "Every teacher is vetted. You get someone who actually knows their subject, not just someone who read about it.",
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 26 }} />,
    color: "#0891b2",
    bg: "#ecfeff",
    title: "Book on Your Schedule",
    desc: "Teachers set their availability, you pick the slot. No back-and-forth emails, no friction.",
  },
  {
    icon: <StarRoundedIcon sx={{ fontSize: 26 }} />,
    color: "#d97706",
    bg: "#fffbeb",
    title: "Honest Reviews",
    desc: "Reviews come only from students who completed a session. No fake ratings, no gaming the system.",
  },
  {
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: 26 }} />,
    color: "#059669",
    bg: "#ecfdf5",
    title: "Real-time Chat",
    desc: "Message your teacher directly before or after a session. Keep everything in one place.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 26 }} />,
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Secure Booking",
    desc: "Your bookings are tracked end-to-end — Pending, Confirmed, Completed. No ambiguity about where things stand.",
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 26 }} />,
    color: "#db2777",
    bg: "#fdf2f8",
    title: "Any Skill, Any Level",
    desc: "From React to financial modelling to public speaking. If someone can teach it, you can find it here.",
  },
];

const steps = [
  {
    number: "01",
    title: "Find a skill",
    desc: "Browse by category, filter by price, sort by rating. Find the right teacher in under a minute.",
  },
  {
    number: "02",
    title: "Book a session",
    desc: "Pick a date and time that works for you. The teacher confirms, and you're set.",
  },
  {
    number: "03",
    title: "Learn and grow",
    desc: "Show up, do the session, leave a review. That's it. No subscriptions, no fluff.",
  },
];

const testimonials = [
  {
    name: "Jamie D.",
    role: "Frontend Developer",
    initials: "JD",
    text: "SkillBridge helped me learn React from a senior dev in two weeks. I'd been stuck on hooks for months — one session fixed that.",
    rating: 5,
  },
  {
    name: "Alex K.",
    role: "Software Engineer",
    initials: "AK",
    text: "Went from beginner to job-ready in about three months. The teachers here actually care whether you understand, not just whether the session ends on time.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Product Manager",
    initials: "PM",
    text: "Booked a financial modelling session on a Friday, had a working DCF model by Sunday. Genuinely impressive.",
    rating: 5,
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { userData } = useAuth();

  const handleGetStarted = () => {
    if (userData) navigate("/skills");
    else navigate("/register");
  };

  const handleBrowseSkills = () => {
    if (userData) navigate("/skills");
    else navigate("/login");
  };

  return (
    <Box sx={{ bgcolor: "#ffffff", overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          pt: { xs: 10, md: 16 },
          pb: { xs: 10, md: 14 },
          px: { xs: 3, sm: 5, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background blobs */}
        <Box sx={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", top: -150, right: -100, pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)", bottom: -100, left: "20%", pointerEvents: "none" }} />

        <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative", textAlign: "center" }}>

          {/* Badge */}
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, bgcolor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", px: 2.5, py: 0.75, mb: 4 }}>
            <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#10b981", boxShadow: "0 0 0 3px rgba(16,185,129,0.25)" }} />
            <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
              200+ teachers ready to help you
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" },
              letterSpacing: -2,
              lineHeight: 1.1,
              mb: 3,
              color: "#ffffff",
            }}
          >
            Learn anything from{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #818cf8, #a78bfa, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              real experts
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: { xs: 16, md: 19 },
              maxWidth: 560,
              mx: "auto",
              lineHeight: 1.7,
              mb: 5,
            }}
          >
            One-on-one sessions with vetted teachers. Pick a skill, book a slot, show up and learn. No subscriptions, no noise.
          </Typography>

          {/* CTAs */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap", mb: 8 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={handleGetStarted}
              sx={{
                px: 4,
                py: 1.6,
                fontSize: 16,
                fontWeight: 700,
                borderRadius: "12px",
                background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
                boxShadow: "0 0 32px rgba(99,102,241,0.4)",
                "&:hover": { background: "linear-gradient(135deg, #4338ca 0%, #4f46e5 100%)", boxShadow: "0 0 40px rgba(99,102,241,0.5)" },
              }}
            >
              {userData ? "Browse Skills" : "Get Started — it's free"}
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={handleBrowseSkills}
              sx={{
                px: 4,
                py: 1.6,
                fontSize: 16,
                fontWeight: 600,
                borderRadius: "12px",
                color: "rgba(255,255,255,0.85)",
                borderColor: "rgba(255,255,255,0.2)",
                "&:hover": { borderColor: "rgba(255,255,255,0.45)", bgcolor: "rgba(255,255,255,0.06)" },
              }}
            >
              {userData ? "My Dashboard" : "Browse Skills"}
            </Button>
          </Box>

          {/* Stats row */}
          <Box sx={{ display: "flex", gap: { xs: 3, md: 6 }, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { icon: <TrendingUpIcon sx={{ fontSize: 18 }} />, value: "120+", label: "Skills listed" },
              { icon: <PeopleAltIcon sx={{ fontSize: 18 }} />, value: "200+", label: "Active teachers" },
              { icon: <StarRoundedIcon sx={{ fontSize: 18 }} />, value: "4.8", label: "Average rating" },
            ].map((stat) => (
              <Box key={stat.label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ color: "#818cf8" }}>{stat.icon}</Box>
                <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>{stat.value}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── How it works ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, sm: 5, md: 10 }, bgcolor: "#f8fafc" }}>
        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Chip label="How it works" sx={{ bgcolor: "#eef2ff", color: "#4f46e5", fontWeight: 600, fontSize: 13, mb: 2 }} />
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.9rem", md: "2.6rem" }, letterSpacing: -1, color: "#0f172a" }}>
              Three steps, that's it
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4,
              position: "relative",
            }}
          >
            {steps.map((step, i) => (
              <Box
                key={step.number}
                sx={{
                  bgcolor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  p: 4,
                  position: "relative",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  "&:hover": { boxShadow: "0 8px 32px rgba(79,70,229,0.1)", borderColor: "#c7d2fe" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    letterSpacing: -2,
                    color: "#eef2ff",
                    lineHeight: 1,
                    mb: 2,
                    userSelect: "none",
                  }}
                >
                  {step.number}
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#0f172a", mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>
                  {step.desc}
                </Typography>
                {i < steps.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      right: -24,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#c7d2fe",
                      fontSize: 28,
                      fontWeight: 300,
                      zIndex: 1,
                    }}
                  >
                    →
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Features ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, sm: 5, md: 10 } }}>
        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Chip label="Why SkillBridge" sx={{ bgcolor: "#eef2ff", color: "#4f46e5", fontWeight: 600, fontSize: 13, mb: 2 }} />
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.9rem", md: "2.6rem" }, letterSpacing: -1, color: "#0f172a" }}>
              Built for people who actually want to learn
            </Typography>
            <Typography sx={{ color: "#64748b", fontSize: 16, mt: 1.5, maxWidth: 500, mx: "auto" }}>
              Not a course platform. Not a video library. Real people, real sessions.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {features.map((f) => (
              <Box
                key={f.title}
                sx={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  p: 3.5,
                  transition: "all 0.2s",
                  cursor: "default",
                  "&:hover": {
                    boxShadow: "0 8px 32px rgba(79,70,229,0.08)",
                    borderColor: "#c7d2fe",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    bgcolor: f.bg,
                    color: f.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {f.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#0f172a", mb: 0.75 }}>
                  {f.title}
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: 13.5, lineHeight: 1.65 }}>
                  {f.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Testimonials ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, sm: 5, md: 10 }, bgcolor: "#f8fafc" }}>
        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Chip label="What students say" sx={{ bgcolor: "#eef2ff", color: "#4f46e5", fontWeight: 600, fontSize: 13, mb: 2 }} />
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.9rem", md: "2.6rem" }, letterSpacing: -1, color: "#0f172a" }}>
              Results speak for themselves
            </Typography>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
            {testimonials.map((t) => (
              <Box
                key={t.name}
                sx={{
                  bgcolor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  p: 3.5,
                  transition: "all 0.2s",
                  "&:hover": { boxShadow: "0 8px 32px rgba(79,70,229,0.08)", borderColor: "#c7d2fe" },
                }}
              >
                {/* Stars */}
                <Box sx={{ display: "flex", gap: 0.3, mb: 2 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarRoundedIcon key={i} sx={{ fontSize: 18, color: "#f59e0b" }} />
                  ))}
                </Box>
                <Typography sx={{ color: "#334155", fontSize: 14.5, lineHeight: 1.7, mb: 3, fontStyle: "italic" }}>
                  "{t.text}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>{t.initials}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: 14, color: "#0f172a" }}>{t.name}</Typography>
                    <Typography sx={{ fontSize: 12, color: "#94a3b8" }}>{t.role}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── CTA ── */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          py: { xs: 10, md: 14 },
          px: { xs: 3, sm: 5, md: 10 },
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <Box sx={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)", top: -150, left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} />
        <Box sx={{ position: "relative", maxWidth: 620, mx: "auto" }}>
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "3rem" }, letterSpacing: -1.5, color: "#ffffff", mb: 2 }}>
            Ready to learn something new?
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: { xs: 15, md: 17 }, mb: 5, lineHeight: 1.7 }}>
            Join thousands of students already learning on SkillBridge. No commitment — book a single session and see for yourself.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={handleGetStarted}
            sx={{
              px: 5,
              py: 1.8,
              fontSize: 16,
              fontWeight: 700,
              borderRadius: "12px",
              background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
              boxShadow: "0 0 40px rgba(99,102,241,0.45)",
              mb: 3,
              "&:hover": { background: "linear-gradient(135deg, #4338ca 0%, #4f46e5 100%)" },
            }}
          >
            {userData ? "Browse Skills" : "Create a free account"}
          </Button>
          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
            {["No subscription required", "Cancel any booking anytime", "Verified teachers only"].map((point) => (
              <Box key={point} sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <CheckCircleIcon sx={{ fontSize: 15, color: "#818cf8" }} />
                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{point}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Footer ── */}
      <Box sx={{ bgcolor: "#0f172a", px: { xs: 3, sm: 5, md: 10 }, py: 5 }}>
        <Box sx={{ maxWidth: 1100, mx: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: "8px", background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>S</Typography>
            </Box>
            <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: 16 }}>SkillBridge</Typography>
          </Box>
          <Typography sx={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            © {new Date().getFullYear()} SkillBridge. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Browse Skills", "Login", "Register"].map((link) => (
              <Typography
                key={link}
                onClick={() => navigate(link === "Browse Skills" ? (userData ? "/skills" : "/login") : `/${link.toLowerCase()}`)}
                sx={{ color: "rgba(255,255,255,0.4)", fontSize: 13, cursor: "pointer", "&:hover": { color: "rgba(255,255,255,0.8)" }, transition: "color 0.15s" }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
