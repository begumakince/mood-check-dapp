// Mood Check dApp için son ruh hali seçimlerini gösterir
// Şimdilik blockchain yok, mock data kullanıyoruz

const mockActivities = [
  { user: "GABC...123", mood: "Happy" },
  { user: "GDEF...456", mood: "Neutral" },
  { user: "GHIJ...789", mood: "Sad" },
];

export default function ActivityFeed() {
  return (
    <div className="border-t-4 border-black pt-6">
      <h2 className="text-xl font-bold uppercase mb-4">
        Recent Mood Activity
      </h2>

      <ul className="space-y-3 font-mono">
        {mockActivities.map((activity, index) => (
          <li
            key={index}
            className="border-2 border-black p-3"
          >
            {activity.user} selected {activity.mood}
          </li>
        ))}
      </ul>
    </div>
  );
}
