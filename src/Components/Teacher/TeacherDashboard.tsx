import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  Chip,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { getTeacherStats } from "../Queries/skill-queries";
import type { SkillType } from "../Skills/SkillsGrid";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

interface Booking {
  bookingId: number;
  skillTitle: string;
  learnerName: string;
  scheduledAt: string;
  durationMinutes: number;
  totalPrice: number;
  status: string;
}

interface TeacherStats {
  teacherSkills: SkillType[];
  upcomingBookings: Booking[];
  completedBookings: Booking[];
  totalEarnings: number;
  averageRating: number;
}

const STATUS_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  Confirmed: { bg: "#f0fdf4", color: "#166534", border: "#bbf7d0" },
  Pending: { bg: "#fffbeb", color: "#92400e", border: "#fde68a" },
  Completed: { bg: "#eef2ff", color: "#3730a3", border: "#c7d2fe" },
  Cancelled: { bg: "#fef2f2", color: "#991b1b", border: "#fecaca" },
};

function formatDateTime(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}) {
  return (
    <Card
      sx={{
        flex: 1,
        minWidth: 160,
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        p: 2.5,
        display: "flex",
        alignItems: "center",
        gap: 2,
        bgcolor: "#ffffff",
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "10px",
          bgcolor: color + "1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontSize: 22, fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>
          {value}
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#64748b", fontWeight: 500, mt: 0.25 }}>
          {label}
        </Typography>
      </Box>
    </Card>
  );
}

function BookingRow({ booking }: { booking: Booking }) {
  const statusStyle = STATUS_COLORS[booking.status] ?? STATUS_COLORS["Pending"];
  const initials = booking.learnerName
    ? booking.learnerName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        py: 1.75,
        px: 2.5,
        borderBottom: "1px solid #f1f5f9",
        "&:last-child": { borderBottom: "none" },
        flexWrap: "wrap",
      }}
    >
      <Avatar
        sx={{
          width: 36,
          height: 36,
          bgcolor: "#eef2ff",
          color: "#4338ca",
          fontWeight: 700,
          fontSize: 13,
          flexShrink: 0,
        }}
      >
        {initials}
      </Avatar>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 13.5, color: "#0f172a" }} noWrap>
          {booking.skillTitle}
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#64748b" }}>
          {booking.learnerName} &middot; {formatDateTime(booking.scheduledAt)}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexShrink: 0 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 13.5, color: "#4f46e5" }}>
          ${booking.totalPrice}
        </Typography>
        <Chip
          label={booking.status}
          size="small"
          sx={{
            bgcolor: statusStyle.bg,
            color: statusStyle.color,
            border: `1px solid ${statusStyle.border}`,
            fontWeight: 600,
            fontSize: 11,
            height: 22,
          }}
        />
      </Box>
    </Box>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card
      sx={{
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        bgcolor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 1.75,
          bgcolor: "#f8fafc",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <Typography
          sx={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase" }}
        >
          {title}
        </Typography>
      </Box>
      {children}
    </Card>
  );
}

export default function TeacherDashboard() {
  const [stats, setStats] = useState<TeacherStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeacherStats()
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!stats) return null;

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 3, md: 6 }, py: { xs: 3, md: 5 } }}>
        {/* Page title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: "#0f172a", letterSpacing: -0.5 }}>
            Teacher Dashboard
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#64748b", mt: 0.5 }}>
            Overview of your skills, bookings, and earnings
          </Typography>
        </Box>

        {/* Stats row */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
          <StatCard
            icon={<SchoolOutlinedIcon fontSize="small" />}
            label="Total Skills"
            value={stats.teacherSkills.length}
            color="#4f46e5"
          />
          <StatCard
            icon={<CalendarMonthOutlinedIcon fontSize="small" />}
            label="Upcoming Bookings"
            value={stats.upcomingBookings.length}
            color="#0ea5e9"
          />
          <StatCard
            icon={<CheckCircleOutlineIcon fontSize="small" />}
            label="Completed"
            value={stats.completedBookings.length}
            color="#10b981"
          />
          <StatCard
            icon={<AttachMoneyIcon fontSize="small" />}
            label="Total Earnings"
            value={`$${stats.totalEarnings.toFixed(0)}`}
            color="#f59e0b"
          />
          <StatCard
            icon={<StarBorderOutlinedIcon fontSize="small" />}
            label="Avg Rating"
            value={stats.averageRating.toFixed(1)}
            color="#ec4899"
          />
        </Box>

        {/* Main grid */}
        <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: "column", md: "row" } }}>
          {/* Left: My Skills */}
          <Box sx={{ width: { xs: "100%", md: 320 }, flexShrink: 0 }}>
            <SectionCard title={`My Skills (${stats.teacherSkills.length})`}>
              {stats.teacherSkills.length === 0 ? (
                <Typography sx={{ p: 3, fontSize: 13, color: "#94a3b8", textAlign: "center" }}>
                  No skills yet
                </Typography>
              ) : (
                stats.teacherSkills.map((skill) => (
                  <Box
                    key={skill.skillId}
                    sx={{
                      px: 2.5,
                      py: 1.75,
                      borderBottom: "1px solid #f1f5f9",
                      "&:last-child": { borderBottom: "none" },
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: 13.5, color: "#0f172a" }}>
                      {skill.title}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 0.5, flexWrap: "wrap" }}>
                      {skill.category?.name && (
                        <Chip
                          label={skill.category.name}
                          size="small"
                          sx={{
                            bgcolor: "#eef2ff",
                            color: "#4338ca",
                            border: "1px solid #c7d2fe",
                            fontWeight: 600,
                            fontSize: 11,
                            height: 20,
                          }}
                        />
                      )}
                      <Typography sx={{ fontSize: 12, color: "#4f46e5", fontWeight: 700 }}>
                        ${skill.pricePerHour}/hr
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
                        <StarRoundedIcon sx={{ fontSize: 13, color: "#f59e0b" }} />
                        <Typography sx={{ fontSize: 12, color: "#64748b" }}>
                          {skill.rating?.toFixed(1) ?? "—"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))
              )}
            </SectionCard>
          </Box>

          {/* Right: Bookings */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
            <SectionCard title={`Upcoming Bookings (${stats.upcomingBookings.length})`}>
              {stats.upcomingBookings.length === 0 ? (
                <Typography sx={{ p: 3, fontSize: 13, color: "#94a3b8", textAlign: "center" }}>
                  No upcoming bookings
                </Typography>
              ) : (
                stats.upcomingBookings.map((b) => <BookingRow key={b.bookingId} booking={b} />)
              )}
            </SectionCard>

            <Divider sx={{ display: { xs: "block", md: "none" } }} />

            <SectionCard title={`Completed Bookings (${stats.completedBookings.length})`}>
              {stats.completedBookings.length === 0 ? (
                <Typography sx={{ p: 3, fontSize: 13, color: "#94a3b8", textAlign: "center" }}>
                  No completed bookings yet
                </Typography>
              ) : (
                stats.completedBookings.map((b) => <BookingRow key={b.bookingId} booking={b} />)
              )}
            </SectionCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
