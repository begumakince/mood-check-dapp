// Mood Check dApp için son ruh hali seçimlerini gösterir
// Şimdilik blockchain yok, mock data kullanıyoruz

import StatsDisplay from "@/components/StatsDisplay";

interface MoodActivity {
  id: string;
  user: string;
  mood: number; // 1–5 arası
  createdAt: string;
}

const mockActivities: MoodActivity[] = [
  { id: "1", user: "GABC...123", mood: 5, createdAt: "2026-02-10T10:00:00Z" }, // Happy
  { id: "2", user: "GDEF...456", mood: 3, createdAt: "2026-02-09T12:00:00Z" }, // Neutral
  { id: "3", user: "GHIJ...789", mood: 1, createdAt: "2026-02-05T15:00:00Z" }, // Sad
  { id: "4", user: "GKLM...012", mood: 4, createdAt: "2026-02-03T18:00:00Z" }, // Happy/High
];

export default function ActivityFeed() {
  return (
    <div className="border-t-4 border-black pt-6">
      <h2 className="text-xl font-bold uppercase mb-4">
        Recent Mood Activity
      </h2>

      <ul className="space-y-3 font-mono mb-6">
        {mockActivities.map((activity) => (
          <li key={activity.id} className="border-2 border-black p-3">
            {activity.user} selected{" "}
            {activity.mood === 1
              ? "Sad"
              : activity.mood === 3
              ? "Neutral"
              : activity.mood === 5
              ? "Happy"
              : activity.mood === 4
              ? "Happy"
              : "–"}
          </li>
        ))}
      </ul>

      {/* StatsDisplay ekliyoruz */}
      <StatsDisplay activities={mockActivities} />
    </div>
  );
}
