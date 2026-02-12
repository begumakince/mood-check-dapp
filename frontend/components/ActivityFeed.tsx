// Mood Check dApp için son ruh hali seçimlerini gösterir

import StatsDisplay from "@/components/StatsDisplay";

interface MoodActivity {
  id: string;
  user: string;
  mood: number; // 1–5 arası
}

const mockActivities: MoodActivity[] = [
  { id: "1", user: "GABC...123", mood: 5 }, // Happy
  { id: "2", user: "GDEF...456", mood: 3 }, // Neutral
  { id: "3", user: "GHIJ...789", mood: 1 }, // Sad
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
              : "Happy"}
          </li>
        ))}
      </ul>

      {/* StatsDisplay ekliyoruz */}
      <StatsDisplay activities={mockActivities} />
    </div>
  );
}

