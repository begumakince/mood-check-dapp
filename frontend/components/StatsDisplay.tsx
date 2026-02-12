interface MoodActivity {
  id: string;
  mood: number; // 1–5
  createdAt: string;
}

interface StatsDisplayProps {
  activities: MoodActivity[];
}

export default function StatsDisplay({ activities }: StatsDisplayProps) {
  // 1️⃣ Ortalama Mood
  const averageMood =
    activities.length === 0
      ? "0"
      : (
          activities.reduce((sum, a) => sum + a.mood, 0) /
          activities.length
        ).toFixed(1);

  // 2️⃣ En sık mood
  const moodCounts: Record<number, number> = {};
  activities.forEach(a => {
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

  // 3️⃣ Mood → Emoji mapping
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

  // 4️⃣ JSX
  return (
    <div style={{ marginTop: "2rem", borderTop: "1px solid black", paddingTop: "1rem" }}>
      <h2>Mood Stats</h2>

      <ul>
        <li>😊 Average mood: {averageMood}</li>
        <li>🔥 Most common mood: {moodEmoji(mostCommonMood)}</li>
        <li>🧠 Total moods logged: {activities.length}</li>
      </ul>
    </div>
  );
}
