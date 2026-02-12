interface MoodActivity {
  id: string;
  user: string;
  mood: number; // 1–5 arası
  createdAt: string;
}

interface StatsDisplayProps {
  activities?: MoodActivity[]; // 👈 optional yaptık
}

export default function StatsDisplay({ activities = [] }: StatsDisplayProps) {
  const safeActivities = activities;

  // 1️⃣ Ortalama Mood
  const averageMood =
    safeActivities.length === 0
      ? "0"
      : (
          safeActivities.reduce((sum, a) => sum + a.mood, 0) /
          safeActivities.length
        ).toFixed(1);

  // 2️⃣ En sık mood
  const moodCounts: Record<number, number> = {};
  safeActivities.forEach(a => {
    moodCounts[a.mood] = (moodCounts[a.mood] || 0) + 1;
  });

  let mostCommonMood: number | null = null;
  let maxCount = 0;

  Object.entries(moodCounts).forEach(([mood, count]) => {
    if (count > maxCount) {
      mostCommonMood = Number(mood);
      maxCount = count;
    }
  });

  // 3️⃣ 7 Günlük Trend
  const now = new Date();

  const last7 = safeActivities.filter(a =>
    new Date(a.createdAt) >= new Date(now.getTime() - 7 * 86400000)
  );

  const prev7 = safeActivities.filter(a => {
    const date = new Date(a.createdAt);
    return (
      date < new Date(now.getTime() - 7 * 86400000) &&
      date >= new Date(now.getTime() - 14 * 86400000)
    );
  });

  const avg = (list: MoodActivity[]) =>
    list.length === 0 ? 0 : list.reduce((s, a) => s + a.mood, 0) / list.length;

  const moodTrend = avg(last7) - avg(prev7);

  const trendText =
    moodTrend > 0 ? "📈 Improving" : moodTrend < 0 ? "📉 Declining" : "➖ Stable";

  // 4️⃣ Emoji map
  const moodEmoji = (mood: number | null) => {
    switch (mood) {
      case 1: return "😞";
      case 2: return "😐";
      case 3: return "🙂";
      case 4: return "😄";
      case 5: return "🤩";
      default: return "–";
    }
  };

  // 5️⃣ JSX
  return (
    <div style={{ marginTop: "2rem", borderTop: "1px solid black", paddingTop: "1rem" }}>
      <h2>Mood Stats</h2>

      <ul>
        <li>😊 Average mood: {averageMood}</li>
        <li>🔥 Most common mood: {moodEmoji(mostCommonMood)}</li>
        <li>📊 7 Day Trend: {trendText}</li>
        <li>🧠 Total moods logged: {safeActivities.length}</li>
      </ul>
    </div>
  );
}
